import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InputBox } from './InputBox';

describe('InputBox', () => {
  const mockValue = 'Test input';
  const mockOnChange = vi.fn();
  const mockOnSubmit = vi.fn();

  it('renders correctly', () => {
    render(
      <InputBox
        value={mockValue}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    expect(
      screen.getByPlaceholderText('Escribe un mensaje...')
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockValue)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    render(
      <InputBox
        value={mockValue}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const input = screen.getByPlaceholderText('Escribe un mensaje...');
    fireEvent.change(input, { target: { value: 'New input' } });
    expect(mockOnChange).toHaveBeenCalledWith('New input');
  });

  it('calls onSubmit when Enter key is pressed', () => {
    render(
      <InputBox
        value={mockValue}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const input = screen.getByPlaceholderText('Escribe un mensaje...');
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('calls onSubmit when button is clicked', () => {
    render(
      <InputBox
        value={mockValue}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const button = screen.getByRole('button', { name: /Enviar/i });
    fireEvent.click(button);
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('disables button when input value is empty', () => {
    render(
      <InputBox value="" onChange={mockOnChange} onSubmit={mockOnSubmit} />
    );

    const button = screen.getByRole('button', { name: /Enviar/i });
    expect(button).toBeDisabled();
  });

  it('enables button when input value is not empty', () => {
    render(
      <InputBox
        value="Non-empty value"
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const button = screen.getByRole('button', { name: /Enviar/i });
    expect(button).not.toBeDisabled();
  });
});
