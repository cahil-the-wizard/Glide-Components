import React from 'react';
import { IconSizes, IconSize, SemanticIconSizes } from '../design-tokens/iconSizes';

export interface IconWrapperProps {
  icon: React.ComponentType<{ weight?: string; className?: string }>;
  size?: IconSize | keyof typeof SemanticIconSizes | number;
  color?: string;
  weight?: 'ultralight' | 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy' | 'black';
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: IconComponent,
  size = 'base',
  color = 'currentColor',
  weight = 'medium',
  className,
}) => {
  // Determine the actual pixel size
  const getPixelSize = (): number => {
    if (typeof size === 'number') return size;
    if (size in IconSizes) return IconSizes[size as IconSize];
    if (size in SemanticIconSizes) return SemanticIconSizes[size as keyof typeof SemanticIconSizes];
    return IconSizes.base; // fallback
  };

  const pixelSize = getPixelSize();

  return (
    <span 
      className={className}
      style={{ 
        width: pixelSize, 
        height: pixelSize, 
        color: color,
        fontSize: pixelSize,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <IconComponent weight={weight} />
    </span>
  );
};

// Convenience function for creating icon elements
export const createIcon = (
  icon: React.ComponentType<{ weight?: string; className?: string }>,
  options?: Omit<IconWrapperProps, 'icon'>
) => <IconWrapper icon={icon} {...options} />;