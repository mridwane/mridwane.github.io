export interface ProjectCardProps {
  title: string;
  description?: string;
  src: string;
  tags?: string[];
  liveUrl?: string;
  detailUrl?: string;
  delay?: number;
  scale?: number;
  loading?: 'eager' | 'lazy';
  timeCount?: string;
  timeUnit?: string;
}