import { useContext } from 'react';
import { ScrollContext } from '@/components/providers/smooth-scroll-provider';

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a SmoothScrollProvider');
  }
  return context;
}
