'use client';
import { useEffect } from 'react';

export function reportWebVitals(metric) {
  const { name, value, rating, delta } = metric;

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vital] ${name}:`, {
      value: Math.round(value),
      rating,
      delta: Math.round(delta)
    });
  }

  if (process.env.NODE_ENV === 'production') {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: rating,
        value: Math.round(value)
      });
    }

    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('Web Vital', {
        props: {
          metric: name,
          value: Math.round(value),
          rating
        }
      });
    }
  }
}

const WebVitals = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(reportWebVitals);
        onFCP(reportWebVitals);
        onLCP(reportWebVitals);
        onTTFB(reportWebVitals);

        if (typeof onINP === 'function') {
          onINP(reportWebVitals);
        }
      });
    }
  }, []);

  return null;
};

export default WebVitals;
