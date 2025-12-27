"use client";

import { bannerPlugin, init } from "@prosdevlab/experience-sdk";
import { useEffect } from "react";

export function SDKProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize SDK once on mount
    init({
      debug: true,
      consent: { required: false },
      plugins: [bannerPlugin],
    });

    console.log("✅ Experience SDK initialized");
  }, []);

  return <>{children}</>;
}
