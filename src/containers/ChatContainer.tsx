import { useState, useRef, useCallback } from 'react';
import { ChatBox } from '../components/ChatBox';
import Core from '@landbot/core';
import type { Message } from 'postcss';
import { useEffectOnce } from '../hooks/useEffectOnces';
import { fetchChatConfig } from '../services/chatService';

export interface ChatMessage {
  key: string;
  text?: string;
  author: 'bot' | 'user';
  timestamp: number;
  type: string;
}

const ChatContainer = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const core = useRef<Core | null>(null);

  useEffectOnce(() => {
    const initializeChat = async () => {
      try {
        core.current = await fetchChatConfig();
        core.current.pipelines.$readableSequence.subscribe((data: Message) => {
          setMessages((prev) => [...prev, parseMessage(data)]);
        });
      } catch (error) {
        console.error('Error initializing chat:', error);
      }
    };
    initializeChat();
  });

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = useCallback(() => {
    if (input.trim() && core.current) {
      core.current.sendMessage({ message: input });
      setInput('');
    }
  }, [input]);

  return (
    <ChatBox
      messages={messages}
      input={input}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

function parseMessage(data: Message): ChatMessage {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai ? 'bot' : 'user',
    timestamp: data.timestamp,
    type: data.type,
  };
}

export default ChatContainer;
