import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEANAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default async function chat_reply(messages) {
  const chatCompletion = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-4',
  });

  return chatCompletion.choices[0].message.content;
}
