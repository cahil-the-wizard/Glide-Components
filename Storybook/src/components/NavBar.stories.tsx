import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Home02 } from "@untitledui/icons/Home02";
import { SearchMd } from "@untitledui/icons/SearchMd";
import { Plus } from "@untitledui/icons/Plus";

interface TabItem {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  title: string;
}

const GlideNavBar = ({ 
  items,
  selectedIndex = 0,
  onItemTap
}: {
  items: TabItem[];
  selectedIndex?: number;
  onItemTap?: (index: number) => void;
}) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '36px',
      padding: '16px 16px 12px 16px',
      background: 'transparent'
    }}>
      {items.map((item, index) => (
        <TabItemView
          key={index}
          item={item}
          isSelected={index === selectedIndex}
          onClick={() => onItemTap?.(index)}
        />
      ))}
    </div>
  );
};

const TabItemView = ({
  item,
  isSelected,
  onClick
}: {
  item: TabItem;
  isSelected: boolean;
  onClick?: () => void;
}) => {
  const textColor = isSelected 
    ? 'var(--color-gray-dark-800)'  // Active/selected - darker
    : 'var(--color-gray-light-500)'; // Inactive - lighter gray

  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2px',
        padding: '12px',
        width: '64px',
        height: '64px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Icon container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '23px',
        height: '23px'
      }}>
        <item.icon size={23} color={textColor} />
      </div>
      
      {/* Label text */}
      <span style={{
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '19.6px',
        color: textColor,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        {item.title}
      </span>
    </button>
  );
};

const meta = {
  title: 'Components/GlideNavBar',
  component: GlideNavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedIndex: {
      control: { type: 'number', min: 0, max: 2 },
    },
  },
} satisfies Meta<typeof GlideNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems: TabItem[] = [
  { icon: Home02, title: 'Home' },
  { icon: SearchMd, title: 'Search' },
  { icon: Plus, title: 'Flow' },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    selectedIndex: 0,
  },
};

export const SearchSelected: Story = {
  args: {
    items: defaultItems,
    selectedIndex: 1,
  },
};

export const FlowSelected: Story = {
  args: {
    items: defaultItems,
    selectedIndex: 2,
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    return (
      <GlideNavBar
        items={defaultItems}
        selectedIndex={selectedIndex}
        onItemTap={setSelectedIndex}
      />
    );
  },
};

// Custom items example
export const CustomItems: Story = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const customItems: TabItem[] = [
      { icon: Home02, title: 'Dashboard' },
      { icon: SearchMd, title: 'Explore' },
    ];
    
    return (
      <GlideNavBar
        items={customItems}
        selectedIndex={selectedIndex}
        onItemTap={setSelectedIndex}
      />
    );
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Home Selected</h4>
        <GlideNavBar items={defaultItems} selectedIndex={0} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Search Selected</h4>
        <GlideNavBar items={defaultItems} selectedIndex={1} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Flow Selected</h4>
        <GlideNavBar items={defaultItems} selectedIndex={2} />
      </div>
    </div>
  ),
};