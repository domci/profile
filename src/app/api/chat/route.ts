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

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as ChatRequestBody;

  if (!messages || !Array.isArray(messages)) {
    return new Response('Messages are required', { status: 400 });
  }

  if (!openai) {
    return new Response('Chat functionality is not configured', { status: 503 });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'got-4.1-nano',
      messages,
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