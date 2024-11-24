import type { MessageProps } from '../types/components';
import { motion } from 'framer-motion';

export const Message = ({ text, author }: MessageProps) => {
  const isBot = author === 'bot';
  return (
    <motion.div
      initial={{ opacity: 0, x: isBot ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: isBot ? 2 : 0 }} // Delay de 2 segundos
      role="listitem"
      className={`${
        isBot ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
      } px-4 py-2 rounded-lg max-w-sm ${isBot ? 'self-start' : 'self-end ml-auto'}`}
    >
      {text}
    </motion.div>
  );
};
