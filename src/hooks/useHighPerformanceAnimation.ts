import { useCallback, useRef, useEffect } from 'react';

interface UseHighPerformanceAnimationOptions {
  targetFPS?: number;
  enableSmoothing?: boolean;
  onFrame?: (deltaTime: number, smoothedDelta: number) => void;
}

export const useHighPerformanceAnimation = ({
  targetFPS = 144,
  enableSmoothing = true,
  onFrame
}: UseHighPerformanceAnimationOptions = {}) => {
  const frameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const accumulatorRef = useRef<number>(0);
  const smoothedDeltaRef = useRef<number>(1000 / targetFPS);
  const isActiveRef = useRef<boolean>(false);
  
  const targetFrameTime = 1000 / targetFPS;
  const smoothingFactor = 0.1;

  const animate = useCallback((timestamp: number) => {
    if (!isActiveRef.current) return;

    if (lastTimeRef.current === 0) {
      lastTimeRef.current = timestamp;
    }

    const deltaTime = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    // Clamp deltaTime to prevent large jumps
    const clampedDelta = Math.min(deltaTime, 100);

    // Smooth the delta time for consistent motion
    if (enableSmoothing) {
      smoothedDeltaRef.current += (clampedDelta - smoothedDeltaRef.current) * smoothingFactor;
    } else {
      smoothedDeltaRef.current = clampedDelta;
    }

    // Accumulate time for fixed timestep
    accumulatorRef.current += smoothedDeltaRef.current;

    // Run animation logic at fixed timestep
    while (accumulatorRef.current >= targetFrameTime) {
      onFrame?.(targetFrameTime, smoothedDeltaRef.current);
      accumulatorRef.current -= targetFrameTime;
    }

    frameRef.current = requestAnimationFrame(animate);
  }, [targetFrameTime, enableSmoothing, onFrame]);

  const start = useCallback(() => {
    if (isActiveRef.current) return;
    
    isActiveRef.current = true;
    lastTimeRef.current = 0;
    accumulatorRef.current = 0;
    smoothedDeltaRef.current = targetFrameTime;
    
    frameRef.current = requestAnimationFrame(animate);
  }, [animate, targetFrameTime]);

  const stop = useCallback(() => {
    isActiveRef.current = false;
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
    }
  }, []);

  const pause = useCallback(() => {
    isActiveRef.current = false;
  }, []);

  const resume = useCallback(() => {
    if (!isActiveRef.current) {
      isActiveRef.current = true;
      lastTimeRef.current = 0;
      frameRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return {
    start,
    stop,
    pause,
    resume,
    isActive: () => isActiveRef.current,
    getCurrentDelta: () => smoothedDeltaRef.current,
    targetFPS
  };
};
