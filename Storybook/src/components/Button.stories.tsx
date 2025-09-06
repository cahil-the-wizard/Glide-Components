import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Mock SwiftUI Button component for Storybook
import { AsteriskIcon as Asterisk } from "@serviette/sf-symbols-react";
import { XmarkIcon as X } from "@serviette/sf-symbols-react";
import { IconWrapper } from '../utils/iconUtils';
import { SemanticIconSizes } from '../design-tokens/iconSizes';

const GlideButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick 
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  size?: 'small' | 'medium';
  disabled?: boolean;
  leadingIcon?: React.ComponentType<{ weight?: string; className?: string }>;
  trailingIcon?: React.ComponentType<{ weight?: string; className?: string }>;
  onClick?: () => void;
}) => {
  const baseStyles = {
    border: 'none',
    borderRadius: '38px', // Pill shape
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    opacity: disabled ? 0.6 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.15s ease-in-out',
    transform: 'scale(1)',
  };

  const sizeStyles = {
    small: { padding: '8px 12px' },
    medium: { padding: '12px 12px' },
  };

  const variantStyles = {
    primary: { 
      backgroundColor: 'var(--color-gray-dark-900)', 
      color: 'var(--color-gray-light-25)',
      border: '0.5px solid rgba(255, 255, 255, 0.3)'
    },
    secondary: { 
      backgroundColor: 'var(--color-gray-light-200)', 
      color: 'var(--color-gray-dark-900)',
      border: 'none'
    },
    tertiary: { 
      backgroundColor: 'var(--color-gray-light-25)', 
      color: 'var(--color-gray-dark-900)',
      border: 'none'
    },
    outline: { 
      backgroundColor: 'transparent', 
      color: 'var(--color-gray-dark-900)',
      border: '0.5px solid var(--color-gray-light-300)'
    },
    ghost: { 
      backgroundColor: 'transparent', 
      color: 'var(--color-gray-light-600)',
      border: 'none'
    },
  };

  const iconColor = variantStyles[variant].color;
  const iconSize = SemanticIconSizes.button; // 16px

  return (
    <button
      style={{ ...baseStyles, ...sizeStyles[size], ...variantStyles[variant] }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = variant === 'outline' || variant === 'ghost' ? '0.7' : '0.85';
          e.currentTarget.style.transform = 'scale(0.98)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'scale(1)';
        }
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(0.96)';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(0.98)';
        }
      }}
    >
      {leadingIcon && (
        <span style={{ 
          width: iconSize, 
          height: iconSize, 
          color: iconColor,
          fontSize: iconSize,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {React.createElement(leadingIcon, { weight: 'medium' })}
        </span>
      )}
      {children}
      {trailingIcon && (
        <span style={{ 
          width: iconSize, 
          height: iconSize, 
          color: iconColor,
          fontSize: iconSize,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {React.createElement(trailingIcon, { weight: 'medium' })}
        </span>
      )}
    </button>
  );
};

const meta = {
  title: 'Components/GlideButton',
  component: GlideButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    leadingIcon: {
      control: false,
    },
    trailingIcon: {
      control: false,
    },
  },
} satisfies Meta<typeof GlideButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    variant: 'primary',
    leadingIcon: Asterisk,
    children: 'Launch',
  },
};

export const WithTrailingIcon: Story = {
  args: {
    variant: 'secondary',
    trailingIcon: X,
    children: 'Close',
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'primary',
    leadingIcon: Asterisk,
    trailingIcon: X,
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <GlideButton variant="primary" leadingIcon={Asterisk} trailingIcon={X}>
          Primary
        </GlideButton>
        <GlideButton variant="secondary" leadingIcon={Asterisk} trailingIcon={X}>
          Secondary
        </GlideButton>
        <GlideButton variant="tertiary" leadingIcon={Asterisk} trailingIcon={X}>
          Tertiary
        </GlideButton>
        <GlideButton variant="outline" leadingIcon={Asterisk} trailingIcon={X}>
          Outline
        </GlideButton>
        <GlideButton variant="ghost" leadingIcon={Asterisk} trailingIcon={X}>
          Ghost
        </GlideButton>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <GlideButton variant="primary" size="small" leadingIcon={Asterisk} trailingIcon={X}>
          Small
        </GlideButton>
        <GlideButton variant="secondary" size="small" leadingIcon={Asterisk} trailingIcon={X}>
          Small
        </GlideButton>
        <GlideButton variant="tertiary" size="small" leadingIcon={Asterisk} trailingIcon={X}>
          Small
        </GlideButton>
        <GlideButton variant="outline" size="small" leadingIcon={Asterisk} trailingIcon={X}>
          Small
        </GlideButton>
        <GlideButton variant="ghost" size="small" leadingIcon={Asterisk} trailingIcon={X}>
          Small
        </GlideButton>
      </div>
    </div>
  ),
};