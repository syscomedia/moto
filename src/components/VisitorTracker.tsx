'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Avoid logging admin interactions, APIs, or internal assets
    if (
      pathname.startsWith('/admin') || 
      pathname.startsWith('/api') || 
      pathname.includes('.')
    ) {
      return;
    }

    const trackVisit = async () => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            path: pathname,
            userAgent: navigator.userAgent,
          }),
        });
      } catch (err) {
        // Silently log or ignore tracking errors to avoid disrupting visitor experience
        console.error('Visitor tracking failed:', err);
      }
    };

    // Small delay to ensure browser environment and navigation are settled
    const timeoutId = setTimeout(trackVisit, 200);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
