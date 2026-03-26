import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage?: number;
  renderTime: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    renderTime: 0
  });
  
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const measurePerformance = () => {
      frameCount.current++;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime.current;

      if (deltaTime >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / deltaTime);
        const memoryUsage = (performance as any).memory ? 
          Math.round((performance as any).memory.usedJSHeapSize / 1048576) : undefined;

        setMetrics({
          fps,
          memoryUsage,
          renderTime: deltaTime / frameCount.current
        });

        frameCount.current = 0;
        lastTime.current = currentTime;
      }

      animationFrameId.current = requestAnimationFrame(measurePerformance);
    };

    animationFrameId.current = requestAnimationFrame(measurePerformance);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return metrics;
};

export const useLazyRender = <T>(
  items: T[],
  threshold: number = 100
) => {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const endIndex = Math.min(startIndex + threshold, items.length);
      setVisibleItems(items.slice(0, endIndex));
      
      if (endIndex < items.length) {
        setStartIndex(endIndex);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [items, startIndex, threshold]);

  return visibleItems;
};
