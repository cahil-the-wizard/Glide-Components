import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bell01 } from "@untitledui/icons/Bell01";

const GlideHeader = ({ 
  onLogoTap,
  onNotificationTap,
  onAccountTap,
  profileImageUrl = 'data:image/png;base64,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',
}: {
  onLogoTap?: () => void;
  onNotificationTap?: () => void;
  onAccountTap?: () => void;
  profileImageUrl?: string;
}) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '8px',
      paddingBottom: '8px',
      background: 'white',
      boxSizing: 'border-box',
      minWidth: '340px'
    }}>
      {/* Logo Section */}
      <button 
        onClick={onLogoTap}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: onLogoTap ? 'pointer' : 'default',
          padding: 0,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <svg width="56" height="20" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 21.11C7.56416 9.29729 20.0185 -1.45606 25.6063 3.04858C33.0162 9.02207 24.059 26.0596 18.1778 21.1099C9.59365 13.8854 32.2095 -1.22038 39.9683 6.16832C46.9139 12.7827 40.128 20.0634 37.1619 18.1545C31.5492 14.5422 41.619 3.28422 54 10.9528" stroke="#252B37" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Right Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {/* Notification Button */}
        <button
          onClick={onNotificationTap}
          style={{
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          <Bell01 size={20} color="var(--color-gray-dark-900)" />
        </button>
        
        {/* Account Button */}
        <button
          onClick={onAccountTap}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
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
      </div>
    </div>
  );
};

const meta = {
  title: 'Components/GlideHeader',
  component: GlideHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlideHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Interactive: Story = {
  render: () => {
    const handleAction = (action: string) => {
      console.log(`${action} clicked`);
    };

    return (
      <GlideHeader
        onLogoTap={() => handleAction('Logo')}
        onNotificationTap={() => handleAction('Notification')}
        onAccountTap={() => handleAction('Account')}
      />
    );
  },
};