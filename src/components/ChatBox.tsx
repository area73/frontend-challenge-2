import React from "react";
import { MessageList } from "./MessageList";
import { InputBox } from "./InputBox";
import type { ChatMessage } from "../containers/ChatContainer";

interface ChatBoxProps {
  messages: ChatMessage[];
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (event: React.SyntheticEvent) => void;
}

export const ChatBox: React.FC<ChatBoxProps> = ({
  messages,
  input,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-900 rounded-lg shadow-md">
      <div className="p-4 bg-gray-800 rounded-t-lg">
        <h1 className="text-lg text-white font-bold">Landbot Chat</h1>
      </div>
      <MessageList messages={messages} />
      <InputBox value={input} onChange={onInputChange} onSubmit={onSubmit} />
    </div>
  );
};
