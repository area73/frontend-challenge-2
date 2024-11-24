// Types for components
export interface ChatMessage {
  key: string;
  text?: string;
  author: 'bot' | 'user';
  timestamp: number;
  type: string;
}

export interface MessageProps {
  text?: string;
  author: string;
}

export interface ChatBoxProps {
  messages: ChatMessage[];
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (event: React.SyntheticEvent) => void;
}

export interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: React.SyntheticEvent) => void;
}
