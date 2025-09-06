import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
// Import popular SF Symbols
import { 
  HouseIcon as House,
  PersonIcon as Person,
  GearIcon as Gear,
  BellIcon,
  EnvelopeIcon as Envelope,
  MagnifyingglassIcon as Search,
  HeartIcon,
  StarIcon,
  ChevronLeftIcon as ChevronLeft,
  ChevronRightIcon as ChevronRight,
  ChevronUpIcon as ChevronUp,
  ChevronDownIcon as ChevronDown,
  PlusIcon as Plus,
  MinusIcon as Minus,
  XmarkIcon as X,
  CheckmarkIcon as Check,
  CalendarIcon as Calendar,
  ClockIcon as Clock,
  ArrowDownToLineIcon as Download,
  ArrowUpToLineIcon as Upload
} from "@serviette/sf-symbols-react";

// Mock GlideIcon component for Storybook - works with SF Symbols
const GlideIcon = ({ 
  icon,
  size = 'base',
  color = 'var(--color-gray-light-900)'
}: {
  icon: React.ComponentType<{ weight?: string; className?: string }>;
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
  const iconSize = sizeMap[size];
  
  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      width: iconSize,
      height: iconSize,
      color: color,
      fontSize: iconSize
    }}>
      <IconComponent weight="medium" />
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

export const HomeIcon: Story = {
  args: {
    icon: House,
    size: 'base',
  },
};

export const UserIcon: Story = {
  args: {
    icon: Person,
    size: 'base',
  },
};

export const SettingsIcon: Story = {
  args: {
    icon: Gear,
    size: 'base',
  },
};

export const Bell: Story = {
  args: {
    icon: BellIcon,
    size: 'base',
  },
};

export const MailIcon: Story = {
  args: {
    icon: Envelope,
    size: 'base',
  },
};

export const SearchIcon: Story = {
  args: {
    icon: Search,
    size: 'base',
  },
};

export const Heart: Story = {
  args: {
    icon: HeartIcon,
    size: 'base',
    color: 'var(--color-error-500)',
  },
};

export const Star: Story = {
  args: {
    icon: StarIcon,
    size: 'base',
    color: 'var(--color-warning-400)',
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={House} size="xs" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xs (12px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={House} size="sm" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>sm (14px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={House} size="base" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>base (16px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={House} size="md" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>md (20px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={House} size="lg" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>lg (24px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={House} size="xl" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xl (32px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={House} size="xxl" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xxl (40px)</div>
      </div>
    </div>
  ),
};

// Icon grid showing available icons
export const IconGrid: Story = {
  render: () => {
    const icons = [
      { component: House, name: 'house' },
      { component: Person, name: 'person' },
      { component: Gear, name: 'gear' },
      { component: BellIcon, name: 'bell' },
      { component: Envelope, name: 'envelope' },
      { component: Search, name: 'magnifyingglass' },
      { component: HeartIcon, name: 'heart' },
      { component: StarIcon, name: 'star' },
      { component: ChevronLeft, name: 'chevron.left' },
      { component: ChevronRight, name: 'chevron.right' },
      { component: ChevronUp, name: 'chevron.up' },
      { component: ChevronDown, name: 'chevron.down' },
      { component: Plus, name: 'plus' },
      { component: Minus, name: 'minus' },
      { component: X, name: 'xmark.large' },
      { component: Check, name: 'checkmark' },
      { component: Calendar, name: 'calendar' },
      { component: Clock, name: 'clock.badge.checkmark' },
      { component: Download, name: 'arrow.down.to.line' },
      { component: Upload, name: 'arrow.up.to.line' },
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
        <GlideIcon icon={HeartIcon} size="lg" color="var(--color-error-500)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={StarIcon} size="lg" color="var(--color-warning-400)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Check} size="lg" color="var(--color-success-500)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Success</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={Gear} size="lg" color="var(--color-gray-light-600)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Secondary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GlideIcon icon={House} size="lg" color="var(--color-gray-light-900)" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Primary</div>
      </div>
    </div>
  ),
};