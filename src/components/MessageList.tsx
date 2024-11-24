import type { ChatMessage } from '../types/components';
import { Message } from './Message';

export const MessageList = ({ messages }: { messages: ChatMessage[] }) => {
  return (
    <div
      className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-700"
      role="list"
    >
      {messages.map(
        (msg) =>
          msg.text && (
            <Message key={msg.key} text={msg.text} author={msg.author} />
          )
      )}
    </div>
  );
};
