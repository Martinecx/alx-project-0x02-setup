// components/common/Card.tsx - Simple version
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  title,
  content,
  className = '',
  variant = 'default',
  onClick,
  showFooter = false,
  footerText = 'Learn more'
}) => {
  // Simple variant styles
  const bgColor = variant === 'primary' ? 'bg-blue-50' : 
                  variant === 'secondary' ? 'bg-gray-50' : 'bg-white';
  
  const borderColor = variant === 'primary' ? 'border-blue-200' :
                     variant === 'secondary' ? 'border-gray-200' : 'border-gray-200';
  
  const textColor = variant === 'primary' ? 'text-blue-900' :
                   variant === 'secondary' ? 'text-gray-800' : 'text-gray-900';

  return (
    <div
      className={`
        rounded-lg border p-6 shadow-sm
        ${bgColor} ${borderColor}
        ${onClick ? 'cursor-pointer hover:shadow-md' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      <h3 className={`text-lg font-semibold mb-3 ${textColor}`}>
        {title}
      </h3>
      
      <p className="text-gray-700 mb-4">
        {content}
      </p>
      
      {showFooter && (
        <div className="pt-4 border-t border-gray-200">
          <button
            className="text-blue-600 hover:text-blue-800 font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            {footerText} →
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
