import { useInView as useIntersectionInView } from 'react-intersection-observer';

/**
 * Scroll-triggered visibility with sensible defaults (uses Intersection Observer).
 * @param {import('react-intersection-observer').IntersectionOptions} [options]
 */
export function useInView(options = {}) {
  return useIntersectionInView({
    threshold: 0.12,
    rootMargin: '-80px 0px',
    triggerOnce: true,
    ...options,
  });
}
