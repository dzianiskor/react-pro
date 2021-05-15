import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

export enum SizeButton {
  small = 'small',
  // medium = 'medium',
  // big = 'big',
}

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: string;
  color?: string;
  backgroundColor?: string;
  size?: SizeButton;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth, color, backgroundColor, size }) => {
  return (
    <button
      type="button"
      className={cn(s.root, size && s[size])}
      onClick={onClick}
      style={{
        color: color && color,
        backgroundColor: backgroundColor && backgroundColor,
        width: fullWidth && '100%',
      }}>
      {children}
    </button>
  );
};

export default Button;
