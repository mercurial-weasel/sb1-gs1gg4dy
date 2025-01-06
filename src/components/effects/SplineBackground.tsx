import React, { useEffect, useState } from 'react';
import GridBackground from './GridBackground';
import { useDelayedLoading } from '../../hooks/useDelayedLoading';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function SplineBackground() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const showLoading = useDelayedLoading(isLoading);

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const loadSpline = async () => {
      try {
        // Check if script is already loaded
        if (document.querySelector('script[src*="splinetool"]')) {
          if (mounted) setIsLoading(false);
          return;
        }

        const script = document.createElement('script');
        scriptElement = script;
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js';
        
        script.onload = () => {
          if (mounted) setIsLoading(false);
        };

        script.onerror = () => {
          if (mounted) {
            if (retryCount < maxRetries) {
              retryCount++;
              setTimeout(loadSpline, 1000 * retryCount); // Exponential backoff
            } else {
              setHasError(true);
              setIsLoading(false);
            }
          }
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('Failed to load Spline viewer:', error);
        if (mounted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };

    loadSpline();

    return () => {
      mounted = false;
      if (scriptElement && document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  // Always render GridBackground as fallback
  return (
    <>
      <GridBackground />
      {!hasError && !showLoading && (
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-80">
          <spline-viewer 
            url="https://prod.spline.design/ascending-bb3892d3cf37a2b16bd63f9ad0dae128/"
            class="w-full h-full"
            loading-anim
            events-target="global"
          />
        </div>
      )}
    </>
  );
}