import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChatBox } from './ChatBox';
import type { ChatMessage } from '../containers/ChatContainer';

describe('ChatBox', () => {
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
  const mockInput = 'Test input';
  const mockOnInputChange = vi.fn();
  const mockOnSubmit = vi.fn();

  it('renders correctly', () => {
    render(
      <ChatBox
        messages={mockMessages}
        input={mockInput}
        onInputChange={mockOnInputChange}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByText('Landbot Chat')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hi there!')).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockInput)).toBeInTheDocument();
  });

  it('passes the correct props to MessageList', () => {
    render(
      <ChatBox
        messages={mockMessages}
        input={mockInput}
        onInputChange={mockOnInputChange}
        onSubmit={mockOnSubmit}
      />
    );

    const messageList = screen.getByRole('list');
    expect(messageList).toBeInTheDocument();
    expect(messageList.children).toHaveLength(mockMessages.length);
  });

  it('passes the correct props to InputBox', () => {
    render(
      <ChatBox
        messages={mockMessages}
        input={mockInput}
        onInputChange={mockOnInputChange}
        onSubmit={mockOnSubmit}
      />
    );

    const inputBox = screen.getByDisplayValue(mockInput);
    expect(inputBox).toBeInTheDocument();
  });

  it('calls onInputChange when input changes', () => {
    render(
      <ChatBox
        messages={mockMessages}
        input={mockInput}
        onInputChange={mockOnInputChange}
        onSubmit={mockOnSubmit}
      />
    );

    const inputBox = screen.getByDisplayValue(mockInput);
    fireEvent.change(inputBox, { target: { value: 'New input' } });
    expect(mockOnInputChange).toHaveBeenCalledWith('New input');
  });

  it('calls onSubmit when form is submitted', () => {
    render(
      <ChatBox
        messages={mockMessages}
        input={mockInput}
        onInputChange={mockOnInputChange}
        onSubmit={mockOnSubmit}
      />
    );
    // Find the form
    const form = screen.getByRole('form');
    const button = within(form).getByRole('button');
    button.click();
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
