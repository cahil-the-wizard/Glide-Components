import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

// Mock SwiftUI TextField component for Storybook
const GlideTextField = ({ 
  placeholder = '',
  isSecure = false,
  keyboardType = 'default',
  value,
  onChange
}: {
  placeholder?: string;
  isSecure?: boolean;
  keyboardType?: 'default' | 'email' | 'numeric';
  value?: string;
  onChange?: (value: string) => void;
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const inputType = isSecure ? 'password' : keyboardType === 'email' ? 'email' : keyboardType === 'numeric' ? 'number' : 'text';

  return (
    <input
      type={inputType}
      placeholder={placeholder}
      value={internalValue}
      onChange={handleChange}
      style={{
        padding: '12px',
        backgroundColor: '#F2F2F7',
        border: '1px solid #C7C7CC',
        borderRadius: '8px',
        fontSize: '16px',
        outline: 'none',
        width: '200px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    />
  );
};

const meta = {
  title: 'Components/GlideTextField',
  component: GlideTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    isSecure: {
      control: { type: 'boolean' },
    },
    keyboardType: {
      control: { type: 'select' },
      options: ['default', 'email', 'numeric'],
    },
  },
} satisfies Meta<typeof GlideTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter email address',
    keyboardType: 'email',
  },
};

export const Numeric: Story = {
  args: {
    placeholder: 'Enter number',
    keyboardType: 'numeric',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    isSecure: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Username',
    value: 'john.doe',
  },
};