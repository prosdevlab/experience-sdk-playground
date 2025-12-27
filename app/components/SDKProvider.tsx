'use client';

import { useEffect } from 'react';
import { init, bannerPlugin } from '@prosdevlab/experience-sdk';

export function SDKProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize SDK once on mount
    init({
      debug: true,
      consent: { required: false },
      plugins: [bannerPlugin],
    });

    console.log('✅ Experience SDK initialized');
  }, []);

  return <>{children}</>;
}

