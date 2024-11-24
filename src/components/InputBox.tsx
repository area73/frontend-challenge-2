import React from 'react';
import type { InputBoxProps } from '../types/components';

export const InputBox: React.FC<InputBoxProps> = ({
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="flex items-center p-4 bg-gray-800">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 p-2 rounded-md bg-gray-600 text-white border-none outline-none"
        placeholder="Escribe un mensaje..."
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onSubmit(e);
          }
        }}
      />
      <button
        onClick={onSubmit}
        disabled={!value.trim()}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
      >
        Enviar
      </button>
    </div>
  );
};
