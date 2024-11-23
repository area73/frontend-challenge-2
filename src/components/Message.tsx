export interface MessageProps {
  text?: string;
  author: string;
}

export const Message = ({ text, author }: MessageProps) => {
  const isBot = author === "bot";
  return (
    <div
      className={`${
        isBot ? "bg-blue-500 text-white" : "bg-green-500 text-white"
      } px-4 py-2 rounded-lg max-w-md ${isBot ? "self-start" : "self-end"}`}
    >
      {text}
    </div>
  );
};
