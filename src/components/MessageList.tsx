import type { ChatMessage } from "../containers/ChatContainer";
import { Message } from "./Message";

export const MessageList = ({ messages }: { messages: ChatMessage[] }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-700">
      {messages.map((msg) => (
        <Message key={msg.key} text={msg.text} author={msg.author} />
      ))}
    </div>
  );
};
