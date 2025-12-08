// interfaces/index.ts
// Export all interfaces for the project

// Card component interface
export interface CardProps {
  title: string;
  content: string;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  onClick?: () => void;
  showFooter?: boolean;
  footerText?: string;
}

// Base component interface
export interface BaseComponent {
  className?: string;
  children?: React.ReactNode;
}

// Page props interface
export interface PageProps {
  title: string;
  description: string;
}

// Navigation interface
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

// For backward compatibility
export default {
  CardProps,
  BaseComponent,
  PageProps,
  NavItem
};
