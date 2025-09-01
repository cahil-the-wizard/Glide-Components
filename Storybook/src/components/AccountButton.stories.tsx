import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const GlideAccountButton = ({ 
  profileImageUrl = 'data:image/png;base64,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',
  size = 34,
  onClick
}: {
  profileImageUrl?: string;
  size?: number;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        border: 'none',
        cursor: onClick ? 'pointer' : 'default',
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundImage: `url(${profileImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#D9D9D9'
        }}
      />
    </button>
  );
};

const meta = {
  title: 'Components/GlideAccountButton',
  component: GlideAccountButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    profileImageUrl: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof GlideAccountButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomSize: Story = {
  args: {
    size: 48,
  },
};

export const SmallSize: Story = {
  args: {
    size: 24,
  },
};

export const CustomImage: Story = {
  args: {
    profileImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
};

export const Interactive: Story = {
  render: () => {
    const handleClick = () => {
      console.log('Account button clicked');
    };

    return (
      <GlideAccountButton onClick={handleClick} />
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Small (24px)</h4>
        <GlideAccountButton size={24} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Default (34px)</h4>
        <GlideAccountButton />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Large (48px)</h4>
        <GlideAccountButton size={48} />
      </div>
    </div>
  ),
};

export const DifferentImages: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Default</p>
        <GlideAccountButton />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Custom 1</p>
        <GlideAccountButton 
          profileImageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Custom 2</p>
        <GlideAccountButton 
          profileImageUrl="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        />
      </div>
    </div>
  ),
};