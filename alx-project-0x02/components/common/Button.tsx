// components/common/Button.tsx
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  type = 'button',
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-600 text-white font-medium
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-colors duration-200
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;