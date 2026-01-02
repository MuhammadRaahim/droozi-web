'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function IfameRouteSync() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('IfameRouteSync: pathname changed to:', pathname);
    
    // Check if we're in an iframe
    const isInIframe = window.self !== window.top;
    console.log('Is in iframe:', isInIframe);
    
    if (isInIframe) {
      try {
        window.parent.postMessage(
          { type: 'navigate', path: pathname },
          '*'
        );
        console.log('Message sent to parent:', pathname);
      } catch (error) {
        console.error('Error sending postMessage:', error);
      }
    }
  }, [pathname]);

  return null;
}