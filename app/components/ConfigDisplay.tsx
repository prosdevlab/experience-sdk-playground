"use client";

import type { Experience } from "@prosdevlab/experience-sdk";

interface ConfigDisplayProps {
  config: Experience;
}

export function ConfigDisplay({ config }: ConfigDisplayProps) {
  // Simple syntax highlighting for JSON
  const formatJSON = (obj: any): string => {
    return JSON.stringify(obj, null, 2);
  };

  return (
    <div className="relative">
      <pre className="overflow-x-auto p-4 bg-zinc-900 dark:bg-zinc-950 rounded-lg text-sm">
        <code className="text-zinc-100 font-mono">{formatJSON(config)}</code>
      </pre>
    </div>
  );
}
