export interface ProjectCardProps {
  title: string;
  description?: string;
  src: string;
  tags?: string[];
  liveUrl?: string;
  detailUrl?: string;
  delay?: number;
  aspectRatio?: '16/9' | '4/3' | '16/10';
  showOverlay?: boolean;
  showRefreshButton?: boolean;
  loading?: 'eager' | 'lazy';
}

export default {};