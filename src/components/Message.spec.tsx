import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Message } from './Message';

describe('Message', () => {
  it('renders correctly with text and author', () => {
    render(<Message text="Hello, world!" author="user" />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('applies correct styles for user messages', () => {
    render(<Message text="Hello, world!" author="user" />);
    const messageDiv = screen.getByText('Hello, world!');
    expect(messageDiv).toHaveClass('bg-green-500 text-white self-end');
  });

  it('applies correct styles for bot messages', () => {
    render(<Message text="Hello, world!" author="bot" />);
    const messageDiv = screen.getByText('Hello, world!');
    expect(messageDiv).toHaveClass('bg-blue-500 text-white self-start');
  });

  it('renders correctly without text', () => {
    render(<Message author="user" />);
    const messageDiv = screen.getByRole('listitem');
    expect(messageDiv).toBeEmptyDOMElement();
  });
});
