import { resumeData } from '@/data/resume';
import { additionalDetails } from '@/data/details';

function formatResumeData(data: typeof resumeData): string {
  const experiences = data.experiences
    .map(
      (exp) => `
Title: ${exp.title}
Company: ${exp.company}
Duration: ${exp.startDate} - ${exp.endDate}
Responsibilities:
${exp.responsibilities.map((resp) => `- ${resp}`).join('\n')}
`
    )
    .join('\n');

  return `
Name: ${data.name}
Title: ${data.title}
Summary:
${data.summary}

Experiences:
${experiences}
`;
}

function formatAdditionalDetails(details: typeof additionalDetails): string {
  return `
Salary Expectations: ${details.salaryExpectations}
Hourly Rate: ${details.hourlyRate}
Location Preferences: ${details.locationPreferences}
Availability: ${details.availability}
Job Types: ${details.jobTypes.join(', ')}
LinkedIn: ${details.contact}
GitHub: ${details.github}
`;
}

export async function fetchChatResponse(
  messages: { role: string; content: string }[],
  onMessage: (msg: { role: string; content: string }) => void
): Promise<void> {
  const resumeText = formatResumeData(resumeData);
  const detailsText = formatAdditionalDetails(additionalDetails);

  const systemPrompt = {
    role: 'system',
    content: `
You are a resume chat bot.
Recruiters can chat with you about Dominik (Dom).

Act as Dominik's best buddy and help him.
Be funny, and advocate for Dominik in a cool way.
Use a lax conversation style.
Never ever promise to contact Dominik.
Just give my LinkedIn profile URL.

IMPORTANT: Always respond in the same language that the user used in their message. If they write in German, respond in German. If they write in English, respond in English. If they write in another language, respond in that language.

Here is my resume:

${resumeText}

Additional Details:

${detailsText}
`,
  };

  const fullMessages = [systemPrompt, ...messages];

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages: fullMessages }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (!response.body) {
    throw new Error('ReadableStream not yet supported in this browser.');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunk = decoder.decode(value);
    onMessage({ role: 'assistant', content: chunk });
  }
} 