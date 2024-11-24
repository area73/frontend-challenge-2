import { useEffect, useRef } from 'react';
import type { ChatMessage } from '../types/components';
import { Message } from './Message';
import { motion } from 'framer-motion';

export const MessageList = ({ messages }: { messages: ChatMessage[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('landbot2.png')",
      }}
      initial={{
        backgroundColor: '#374151',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
      }}
      animate={{
        backgroundColor: ['#2C3441', '#7A7581', '#374151'],
      }}
      transition={{
        duration: 2,
        repeat: 0,
        ease: 'easeIn',
      }}
      className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-700"
      role="list"
    >
      {messages.map(
        (msg) =>
          msg.text && (
            <Message key={msg.key} text={msg.text} author={msg.author} />
          )
      )}
    </motion.div>
  );
};
