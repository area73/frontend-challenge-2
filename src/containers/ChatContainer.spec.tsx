import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, type Mock } from 'vitest';
import ChatContainer from './ChatContainer';

import Core from '@landbot/core';
import type { ChatBoxProps } from '../components/ChatBox';
import { CHAT_CONFIG_URL } from '../services/chatService';

vi.mock('@landbot/core');
vi.mock('../components/ChatBox', () => ({
  ChatBox: ({ messages, input, onInputChange, onSubmit }: ChatBoxProps) => (
    <div>
      <div role="list">
        {messages.map((msg) => (
          <div key={msg.key} role="listitem">
            {msg.text}
          </div>
        ))}
      </div>
      <input
        placeholder="Escribe un mensaje..."
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button onClick={onSubmit} disabled={!input.trim()}>
        Enviar
      </button>
    </div>
  ),
}));

describe('ChatContainer', () => {
  it('renders ChatBox component', () => {
    render(<ChatContainer />);
    expect(
      screen.getByPlaceholderText('Escribe un mensaje...')
    ).toBeInTheDocument();
  });

  it('handles input change', async () => {
    render(<ChatContainer />);
    const input = screen.getByPlaceholderText('Escribe un mensaje...');
    await userEvent.type(input, 'New input');
    expect(input).toHaveValue('New input');
  });

  it('fetches and sets messages on mount', async () => {
    const mockCoreInstance = {
      sendMessage: vi.fn(),
      pipelines: {
        $readableSequence: {
          subscribe: vi.fn((callback) => {
            callback({
              key: '3',
              title: 'New message',
              samurai: true,
              timestamp: 1732367400,
              type: 'text',
            });
          }),
        },
      },
      init: vi.fn(),
    };
    (Core as unknown as Mock).mockImplementation(() => mockCoreInstance);

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response)
    );

    render(<ChatContainer />);

    await waitFor(() => {
      expect(screen.getByText('New message')).toBeInTheDocument();
    });
  });

  it('ensures fetch is called with the correct URL', async () => {
    const mockCoreInstance = {
      sendMessage: vi.fn(),
      pipelines: {
        $readableSequence: {
          subscribe: vi.fn(),
        },
      },
      init: vi.fn(),
    };
    (Core as unknown as Mock).mockImplementation(() => mockCoreInstance);

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response)
    );

    render(<ChatContainer />);

    expect(global.fetch).toHaveBeenCalledWith(CHAT_CONFIG_URL);
  });
});
