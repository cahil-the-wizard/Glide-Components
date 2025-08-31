import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Mock SwiftUI Card component for Storybook
const GlideCard = ({ 
  children,
  padding = 16,
  cornerRadius = 12,
  shadowRadius = 2
}: {
  children: React.ReactNode;
  padding?: number;
  cornerRadius?: number;
  shadowRadius?: number;
}) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: `${cornerRadius}px`,
        padding: `${padding}px`,
        boxShadow: `0 1px ${shadowRadius}px rgba(0, 0, 0, 0.1)`,
        border: '1px solid #E5E5EA',
      }}
    >
      {children}
    </div>
  );
};

const meta = {
  title: 'Components/GlideCard',
  component: GlideCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'number' },
    },
    cornerRadius: {
      control: { type: 'number' },
    },
    shadowRadius: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof GlideCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>Card Title</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
          This is some content inside the card component. It demonstrates how the card wraps around its content.
        </p>
      </div>
    ),
  },
};

export const WithCustomPadding: Story = {
  args: {
    padding: 24,
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>Custom Padding</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
          This card has increased padding for more breathing room.
        </p>
      </div>
    ),
  },
};

export const WithCustomRadius: Story = {
  args: {
    cornerRadius: 20,
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>Rounded Card</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
          This card has a larger corner radius for a more rounded appearance.
        </p>
      </div>
    ),
  },
};

export const SimpleContent: Story = {
  args: {
    children: <p style={{ margin: 0, textAlign: 'center' }}>Simple card content</p>,
  },
};