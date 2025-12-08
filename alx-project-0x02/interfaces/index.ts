// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}