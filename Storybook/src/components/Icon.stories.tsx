import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
// Import popular UntitledUI icons using correct names
import { Home01 } from "@untitledui/icons/Home01";
import { User01 } from "@untitledui/icons/User01";
import { Settings01 } from "@untitledui/icons/Settings01";
import { Bell01 } from "@untitledui/icons/Bell01";
import { Mail01 } from "@untitledui/icons/Mail01";
import { SearchMd } from "@untitledui/icons/SearchMd";
import { Heart } from "@untitledui/icons/Heart";
import { Star01 } from "@untitledui/icons/Star01";
import { ChevronLeft } from "@untitledui/icons/ChevronLeft";
import { ChevronRight } from "@untitledui/icons/ChevronRight";
import { ChevronUp } from "@untitledui/icons/ChevronUp";
import { ChevronDown } from "@untitledui/icons/ChevronDown";
import { Plus } from "@untitledui/icons/Plus";
import { Minus } from "@untitledui/icons/Minus";
import { X } from "@untitledui/icons/X";
import { Check } from "@untitledui/icons/Check";
import { Calendar } from "@untitledui/icons/Calendar";
import { Clock } from "@untitledui/icons/Clock";
import { Download01 } from "@untitledui/icons/Download01";
import { Upload01 } from "@untitledui/icons/Upload01";

// Mock GlideIcon component for Storybook
const GlideIcon = ({ 
  icon,
  size = 'base',
  color = 'var(--color-gray-light-900)'
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  size?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';
  color?: string;
}) => {
  const sizeMap = {
    xs: 12,
    sm: 14,
    base: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xxl: 40,
  };

  const IconComponent = icon;
  
  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      width: sizeMap[size],
      height: sizeMap[size]
    }}>
      <IconComponent size={sizeMap[size]} color={color} />
    </div>
  );
};

const meta = {
  title: 'Components/GlideIcon',
  component: GlideIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'md', 'lg', 'xl', 'xxl'],
    },
    color: {
      control: { type: 'color' },
    },
  },
} satisfies Meta<typeof GlideIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    icon: Home01,
    size: 'base',
  },
};

export const User: Story = {
  args: {
    icon: User01,
    size: 'base',
  },
};

export const Settings: Story = {
  args: {
    icon: Settings01,
    size: 'base',
  },
};

export const Bell: Story = {
  args: {
    icon: Bell01,
    size: 'base',
  },
};

export const Mail: Story = {
  args: {
    icon: Mail01,
    size: 'base',
  },
};

export const Search: Story = {
  args: {
    icon: SearchMd,
    size: 'base',
  },
};

export const HeartIcon: Story = {
  args: {
    icon: Heart,
    size: 'base',
    color: 'var(--color-error-500)',
  },
};

export const Star: Story = {
  args: {
    icon: Star01,
    size: 'base',
    color: 'var(--color-warning-400)',
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Home01} size="xs" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xs (12px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Home01} size="sm" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>sm (14px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Home01} size="base" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>base (16px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Home01} size="md" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>md (20px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Home01} size="lg" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>lg (24px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Home01} size="xl" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xl (32px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Home01} size="xxl" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xxl (40px)</div>
      </div>
    </div>
  ),
};

// Icon grid showing available icons
export const IconGrid: Story = {
  render: () => {
    const icons = [
      { component: Home01, name: 'home-01' },
      { component: User01, name: 'user-01' },
      { component: Settings01, name: 'settings-01' },
      { component: Bell01, name: 'bell-01' },
      { component: Mail01, name: 'mail-01' },
      { component: SearchMd, name: 'search-md' },
      { component: Heart, name: 'heart' },
      { component: Star01, name: 'star-01' },
      { component: ChevronLeft, name: 'chevron-left' },
      { component: ChevronRight, name: 'chevron-right' },
      { component: ChevronUp, name: 'chevron-up' },
      { component: ChevronDown, name: 'chevron-down' },
      { component: Plus, name: 'plus' },
      { component: Minus, name: 'minus' },
      { component: X, name: 'x' },
      { component: Check, name: 'check' },
      { component: Calendar, name: 'calendar' },
      { component: Clock, name: 'clock' },
      { component: Download01, name: 'download-01' },
      { component: Upload01, name: 'upload-01' },
    ];
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '24px',
        maxWidth: '800px'
      }}>
        {icons.map(({ component, name }) => (
          <div key={name} style={{ 
            textAlign: 'center',
            padding: '16px',
            border: '1px solid var(--color-gray-light-200)',
            borderRadius: '8px'
          }}>
            <GlideIcon icon={component} size="lg" />
            <div style={{ 
              fontSize: '12px', 
              marginTop: '8px', 
              fontFamily: 'monospace',
              color: 'var(--color-gray-light-600)'
            }}>
              {name}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

// Semantic colors
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Heart} size="lg" color="var(--color-error-500)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Star01} size="lg" color="var(--color-warning-400)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Check} size="lg" color="var(--color-success-500)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Success</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Settings01} size="lg" color="var(--color-gray-light-600)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Secondary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Home01} size="lg" color="var(--color-gray-light-900)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Primary</div>
      </div>
    </div>
  ),
};