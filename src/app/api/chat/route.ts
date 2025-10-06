import { OpenAI } from 'openai';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

// Environment variables for chat functionality
// These are only needed at runtime, not build time
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const CF_GATEWAY_ID = process.env.CF_GATEWAY_ID;

// Initialize OpenAI only if environment variables are available
const openai = OPENAI_API_KEY && CF_ACCOUNT_ID && CF_GATEWAY_ID ? new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: `https://gateway.ai.cloudflare.com/v1/${CF_ACCOUNT_ID}/${CF_GATEWAY_ID}/openai`,
}) : null;

// Add interface for the request body
interface ChatRequestBody {
  messages: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
  }>;
}

const MAX_TOTAL_MESSAGE_LENGTH = 5000; // Allow some buffer for multiple messages

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as ChatRequestBody;

  if (!messages || !Array.isArray(messages)) {
    return new Response('Messages are required', { status: 400 });
  }

  // Validate message length to prevent abuse
  const totalLength = messages.reduce((sum, msg) => sum + (msg.content?.length || 0), 0);
  if (totalLength > MAX_TOTAL_MESSAGE_LENGTH) {
    return new Response(
      JSON.stringify({
        error: `Message too long. Total length ${totalLength} exceeds maximum of ${MAX_TOTAL_MESSAGE_LENGTH} characters.`
      }),
      { status: 400 }
    );
  }

  // Validate individual messages aren't too long (should match frontend limit)
  for (const message of messages) {
    if (message.content && message.content.length > 300) {
      return new Response(
        JSON.stringify({
          error: `Individual message too long. Maximum 300 characters per message.`
        }),
        { status: 400 }
      );
    }
  }

  if (!openai) {
    return new Response('Chat functionality is not configured', { status: 503 });
  }

  // Add system prompt to encourage markdown formatting for links and better formatting
  const systemMessage = {
    role: 'system' as const,
    content: `You are a helpful assistant discussing Dominik's resume and professional background. When mentioning URLs, websites, or links, always format them as proper markdown links like [LinkedIn Profile](https://linkedin.com/in/username) rather than displaying raw URLs. Use markdown formatting for better readability, including:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- Proper link formatting: [Link Text](URL)
- Bullet points or numbered lists when appropriate
- Code snippets with backticks when mentioning technical terms

Keep your responses conversational but professional, and focus on providing accurate information about Dominik's background, skills, and experience.`
  };

  const messagesWithSystem = [systemMessage, ...messages];

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: messagesWithSystem,
      temperature: 0.7,
      stream: true,
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const part of response) {
            const text = part.choices[0]?.delta?.content || '';
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (streamError) {
          console.error('Stream error:', streamError);
          controller.error(streamError);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'X-Accel-Buffering': 'no',
      },
    });
  } catch (error: any) {
    console.error('OpenAI API Error:', error);

    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500 }
    );
  }
} 