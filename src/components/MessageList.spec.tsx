import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MessageList } from './MessageList';
import type { ChatMessage } from '../containers/ChatContainer';

describe('MessageList', () => {
  const mockMessages: ChatMessage[] = [
    {
      key: '1',
      text: 'Hello',
      author: 'user',
      timestamp: 1732367400,
      type: 'text',
    },
    {
      key: '2',
      text: 'Hi there!',
      author: 'bot',
      timestamp: 1732334377,
      type: 'text',
    },
  ];

  it('renders correctly', () => {
    render(<MessageList messages={mockMessages} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders the correct number of messages', () => {
    render(<MessageList messages={mockMessages} />);
    const messageElements = screen.getAllByRole('listitem');
    expect(messageElements).toHaveLength(mockMessages.length);
  });

  it('renders messages with correct text and author', () => {
    render(<MessageList messages={mockMessages} />);
    mockMessages.forEach((msg) => {
      expect(screen.getByText(msg.text!)).toBeInTheDocument();
    });
  });

  it('applies correct styles for user and bot messages', () => {
    render(<MessageList messages={mockMessages} />);
    const userMessage = screen.getByText('Hello');
    const botMessage = screen.getByText('Hi there!');
    expect(userMessage).toHaveClass('bg-green-500 text-white self-end');
    expect(botMessage).toHaveClass('bg-blue-500 text-white self-start');
  });

  it('renders correctly with no messages', () => {
    render(<MessageList messages={[]} />);
    expect(screen.getByRole('list')).toBeEmptyDOMElement();
  });
});
