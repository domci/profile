'use client';

import { useState, FormEvent, ChangeEvent, useRef, useEffect } from 'react';
import { fetchChatResponse } from '@/lib/chat';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '@/lib/language-context';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function LoadingDots() {
  return (
    <div className="flex items-center space-x-1">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
    </div>
  );
}

const MAX_MESSAGE_LENGTH = 300;

export function ResumeChat() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: t('chat.initialMessage')
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isWaitingForFirstResponse, setIsWaitingForFirstResponse] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Limit input to MAX_MESSAGE_LENGTH characters
    if (value.length <= MAX_MESSAGE_LENGTH) {
      setInput(value);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || input.length > MAX_MESSAGE_LENGTH) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setError(null); // Clear any previous errors
    setIsLoading(true);
    setIsWaitingForFirstResponse(true);

    try {
      await fetchChatResponse([...messages, userMessage], (delta) => {
        setIsWaitingForFirstResponse(false);
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];

          if (lastMessage.role === 'assistant') {
            const updatedMessage: Message = {
              ...lastMessage,
              content: lastMessage.content + delta.content,
            };
            return [...prevMessages.slice(0, -1), updatedMessage];
          }

          return [...prevMessages, { role: 'assistant', content: delta.content }];
        });
      });
    } catch (error) {
      console.error('Error fetching chat response:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while sending your message');
      // Remove the user message if there was an error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
      setIsWaitingForFirstResponse(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex w-full ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 break-words ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      className="text-blue-300 hover:text-blue-200 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
        {isWaitingForFirstResponse && (
          <div className="flex justify-start">
            <div className="bg-gray-700 rounded-lg px-4 py-2">
              <LoadingDots />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {error && (
        <div className="border-t border-red-700 bg-red-900/20 p-4">
          <div className="text-red-400 text-sm">
            <strong>Error:</strong> {error}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t border-gray-700 p-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder={t('chat.placeholder')}
              className={`w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                input.length > MAX_MESSAGE_LENGTH * 0.9
                  ? 'focus:ring-red-500'
                  : 'focus:ring-blue-500'
              }`}
              disabled={isLoading}
              maxLength={MAX_MESSAGE_LENGTH}
            />
            <div className={`absolute bottom-1 right-2 text-xs ${
              input.length > MAX_MESSAGE_LENGTH * 0.9
                ? 'text-red-400'
                : 'text-gray-400'
            }`}>
              {input.length}/{MAX_MESSAGE_LENGTH}
            </div>
          </div>
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg transition-colors ${
              input.trim() && input.length <= MAX_MESSAGE_LENGTH && !isLoading
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
            disabled={isLoading || !input.trim() || input.length > MAX_MESSAGE_LENGTH}
          >
            {t('chat.send')}
          </button>
        </div>
      </form>
    </div>
  );
}