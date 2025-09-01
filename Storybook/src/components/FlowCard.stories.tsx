import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CheckCircle } from "@untitledui/icons/CheckCircle";
import { Hourglass03 } from "@untitledui/icons/Hourglass03";

const GlideFlowCard = ({ 
  title = "Job Application",
  step = "Step 2 of 5: Draft outline",
  duration = "10 min",
  onClick
}: {
  title?: string;
  step?: string;
  duration?: string;
  onClick?: () => void;
}) => {
  return (
    <div 
      onClick={onClick}
      style={{
        width: '100%',
        height: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
        background: 'white',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-gray-light-200, #E9EAEB)',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <div style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '4px',
        display: 'flex'
      }}>
        <div style={{
          color: 'black',
          fontSize: '16px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '500',
          lineHeight: '22.4px',
          wordWrap: 'break-word'
        }}>
          {title}
        </div>
        <div style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '12px',
          display: 'flex'
        }}>
          <div style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4px',
            display: 'flex'
          }}>
            <CheckCircle size={18} color="var(--color-gray-light-800, #252B37)" />
            <div style={{
              color: 'var(--color-gray-light-800, #252B37)',
              fontSize: '14px',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '400',
              lineHeight: '19.6px',
              wordWrap: 'break-word'
            }}>
              {step}
            </div>
          </div>
          <div style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4px',
            display: 'flex'
          }}>
            <Hourglass03 size={18} color="var(--color-gray-light-800, #252B37)" />
            <div style={{
              color: 'var(--color-gray-light-800, #252B37)',
              fontSize: '14px',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '400',
              lineHeight: '19.6px',
              wordWrap: 'break-word'
            }}>
              {duration}
            </div>
          </div>
        </div>
      </div>
      <div style={{
        width: '24px',
        height: '24px',
        position: 'relative',
        opacity: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          width: '6px',
          height: '12px',
          left: '9px',
          top: '6px',
          position: 'absolute',
          border: '2px solid var(--color-gray-dark-800, #252B37)',
          borderLeft: 'none'
        }} />
      </div>
    </div>
  );
};

const meta = {
  title: 'Components/GlideFlowCard',
  component: GlideFlowCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    step: {
      control: { type: 'text' },
    },
    duration: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof GlideFlowCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    title: 'Resume Review',
    step: 'Step 1 of 3: Upload documents',
    duration: '5 min',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Interview Preparation Workshop',
    step: 'Step 3 of 7: Practice common questions and scenarios',
    duration: '45 min',
  },
};

export const Interactive: Story = {
  render: () => {
    const handleClick = () => {
      console.log('Flow card clicked');
    };

    return (
      <GlideFlowCard onClick={handleClick} />
    );
  },
};

export const CardList: Story = {
  render: () => (
    <div style={{ 
      width: '400px',
      border: '1px solid #E9EAEB',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <GlideFlowCard 
        title="Job Application"
        step="Step 2 of 5: Draft outline"
        duration="10 min"
      />
      <GlideFlowCard 
        title="Resume Review"
        step="Step 1 of 3: Upload documents"
        duration="5 min"
      />
      <GlideFlowCard 
        title="Interview Prep"
        step="Step 4 of 6: Mock interview"
        duration="30 min"
      />
    </div>
  ),
};