import { useState, useRef, useCallback } from "react";
import { ChatBox } from "../components/ChatBox";
import Core from "@landbot/core";
import type { Message } from "postcss";
import { useEffectOnce } from "../hooks/useEffectOnces";

export interface ChatMessage {
  key: string;
  text?: string;
  author: "bot" | "user";
  timestamp: number;
  type: string;
}

const ChatContainer = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const core = useRef<Core | null>(null);

  useEffectOnce(() => {
    const fetchConfig = async () => {
      const response = await fetch(
        "https://chats.landbot.io/u/H-441480-B0Q96FP58V53BJ2J/index.json"
      );
      const config = await response.json();
      core.current = new Core(config);
      core.current.pipelines.$readableSequence.subscribe((data: Message) => {
        setMessages((prev) => [...prev, parseMessage(data)]);
      });
      await core.current.init();
    };
    fetchConfig();
  });

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = useCallback(() => {
    if (input.trim() && core.current) {
      core.current.sendMessage({ message: input });
      setInput("");
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
    author: data.samurai ? "bot" : "user",
    timestamp: data.timestamp,
    type: data.type,
  };
}

export default ChatContainer;
