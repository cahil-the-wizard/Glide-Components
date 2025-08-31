import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Plus } from "@untitledui/icons/Plus";
import { Settings02 } from "@untitledui/icons/Settings02";
import { Microphone01 } from "@untitledui/icons/Microphone01";
import { ArrowUp } from "@untitledui/icons/ArrowUp";

const GlideInput = ({ 
  placeholder = "Outline the task you are struggling with",
  value,
  onChange,
  onSubmit 
}: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      width: '100%',
      maxWidth: '450px',
      minWidth: '280px',
      background: 'white',
      borderRadius: '20px 20px 0px 0px',
      border: '0.5px solid var(--color-gray-light-300)',
      boxShadow: '0px -4px 6px rgba(15, 23, 41, 0.02)',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        padding: '16px 0px 12px 0px',
        width: '100%'
      }}>
        {/* Text input field - full width */}
        <div style={{
          padding: '0px 16px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onSubmit?.();
              }
            }}
            rows={1}
            style={{
              border: 'none',
              outline: 'none',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '22.4px',
              color: 'var(--color-gray-dark-900)',
              background: 'transparent',
              width: '100%',
              padding: '0',
              margin: '0',
              resize: 'none',
              overflow: 'hidden',
              maxHeight: '88px', // 4 lines
              minHeight: '22.4px' // 1 line
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              const scrollHeight = Math.min(target.scrollHeight, 88);
              target.style.height = scrollHeight + 'px';
              if (target.scrollHeight > 88) {
                target.style.overflowY = 'scroll';
              } else {
                target.style.overflowY = 'hidden';
              }
            }}
          />
        </div>

        {/* All action buttons in one row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '0px 16px',
          width: '100%',
          boxSizing: 'border-box',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {/* Add button */}
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              background: 'var(--color-gray-light-100)',
              borderRadius: '38px',
              border: 'none',
              cursor: 'pointer'
            }}>
              <Plus size={18} color="var(--color-gray-dark-900)" />
            </button>
            
            {/* Tune button */}
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              background: 'var(--color-gray-light-100)',
              borderRadius: '38px',
              border: 'none',
              cursor: 'pointer'
            }}>
              <Settings02 size={18} color="var(--color-gray-light-600)" />
            </button>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {/* Mic button */}
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              background: 'var(--color-gray-light-100)',
              borderRadius: '38px',
              border: 'none',
              cursor: 'pointer'
            }}>
              <Microphone01 size={18} color="var(--color-gray-dark-900)" />
            </button>
            
            {/* Send button */}
            <button 
              onClick={onSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px',
                background: 'var(--color-gray-dark-900)',
                borderRadius: '38px',
                border: '0.5px solid rgba(255, 255, 255, 0.5)',
                cursor: 'pointer'
              }}
            >
              <ArrowUp size={18} color="var(--color-gray-light-25)" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Components/GlideInput',
  component: GlideInput,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px',
          },
        },
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof GlideInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Outline the task you are struggling with',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Outline the task you are struggling with',
    value: 'Help me create a responsive navbar component',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'What can I help you with today?',
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    const handleSubmit = () => {
      console.log('Submitted:', value);
      setValue('');
    };
    
    return (
      <GlideInput
        placeholder="Type your message and press Enter or click send..."
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
      />
    );
  },
};

// Responsive example
export const Responsive: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      width: '100%',
      padding: '16px'
    }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
          Responsive Width (resize window to see adaptation)
        </h4>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <GlideInput placeholder="This input adapts to container width" />
        </div>
      </div>
    </div>
  ),
};

// States showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Empty State</h4>
        <GlideInput placeholder="Outline the task you are struggling with" />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>With Content</h4>
        <GlideInput 
          placeholder="Outline the task you are struggling with"
          value="Create a mobile-first design system"
        />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Custom Placeholder</h4>
        <GlideInput placeholder="What's on your mind?" />
      </div>
    </div>
  ),
};