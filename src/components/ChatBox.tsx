import React from 'react';
import { MessageList } from './MessageList';
import { InputBox } from './InputBox';
import type { ChatBoxProps } from '../types/components';

export const ChatBox: React.FC<ChatBoxProps> = ({
  messages,
  input,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div
      className="flex flex-col w-full h-full bg-gray-900 rounded-lg shadow-md"
      role="form"
    >
      <div className="p-4 bg-gray-800 rounded-t-lg">
        <h1 className="text-lg text-white font-bold">Landbot Chat</h1>
      </div>
      <MessageList messages={messages} />
      <InputBox value={input} onChange={onInputChange} onSubmit={onSubmit} />
    </div>
  );
};
