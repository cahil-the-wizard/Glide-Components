import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const GlideLogo = ({ 
  width = 56,
  height = 24,
  color = '#252B37',
  onClick
}: {
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
}) => {
  return (
    <button 
      onClick={onClick}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: onClick ? 'pointer' : 'default',
        padding: 0,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <svg width={width} height={height} viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 21.11C7.56416 9.29729 20.0185 -1.45606 25.6063 3.04858C33.0162 9.02207 24.059 26.0596 18.1778 21.1099C9.59365 13.8854 32.2095 -1.22038 39.9683 6.16832C46.9139 12.7827 40.128 20.0634 37.1619 18.1545C31.5492 14.5422 41.619 3.28422 54 10.9528" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </button>
  );
};

const meta = {
  title: 'Components/GlideLogo',
  component: GlideLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' },
    },
  },
} satisfies Meta<typeof GlideLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    width: 112,
    height: 48,
  },
};

export const Small: Story = {
  args: {
    width: 28,
    height: 12,
  },
};

export const CustomColor: Story = {
  args: {
    color: '#007bff',
  },
};

export const Interactive: Story = {
  render: () => {
    const handleClick = () => {
      console.log('Logo clicked');
    };

    return (
      <GlideLogo onClick={handleClick} />
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Small (28x12)</h4>
        <GlideLogo width={28} height={12} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Default (56x24)</h4>
        <GlideLogo />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Large (112x48)</h4>
        <GlideLogo width={112} height={48} />
      </div>
    </div>
  ),
};