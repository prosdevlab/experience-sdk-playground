"use client";

import type { Experience } from "@prosdevlab/experience-sdk";
import { register } from "@prosdevlab/experience-sdk";
import { Copy, ExternalLink, FileJson, Lightbulb, Target } from "lucide-react";
import { useState } from "react";
import { ConfigDisplay } from "./ConfigDisplay";

interface ExampleDemoProps {
  title: string;
  description: string | React.ReactNode;
  config: Experience;
  bestFor?: string[];
  tips?: string[];
}

export function ExampleDemo({
  title,
  description,
  config,
  bestFor,
  tips,
}: ExampleDemoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTrigger = () => {
    // Special handling for feature announcement (event tracking demo)
    if (config.id === "feature-launch") {
      window.location.href = "/feature-announcement";
      return;
    }

    // Register the experience (use the config's ID)
    register(config.id, config);

    // Get the URL from targeting rules
    let targetUrl = "/";

    if (config.targeting?.url?.contains) {
      // Navigate to a URL that contains the target string
      targetUrl = config.targeting.url.contains;
    } else if (config.targeting?.url?.equals) {
      targetUrl = config.targeting.url.equals;
    } else if (config.targeting?.url?.matches) {
      // For regex matches, use a sample matching URL
      const regex = config.targeting.url.matches;
      if (regex.source.includes("electronics")) {
        targetUrl = "/categories/electronics";
      }
    }

    // Navigate to the target URL to trigger the experience
    window.location.href = targetUrl;
  };

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-white dark:bg-zinc-950">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {title}
            </h3>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleTrigger}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center gap-1"
            >
              See Demo
              <ExternalLink className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {isExpanded ? "Hide Config" : "Show Config"}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-zinc-200 dark:border-zinc-800">
          {/* Configuration */}
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileJson className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Configuration
                </h4>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(
                    JSON.stringify(config, null, 2),
                  );
                }}
                className="px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors inline-flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>
            <ConfigDisplay config={config} />
          </div>

          {/* Best For */}
          {bestFor && bestFor.length > 0 && (
            <div className="px-6 py-4 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  When to use this:
                </h4>
              </div>
              <ul className="space-y-1">
                {bestFor.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tips */}
          {tips && tips.length > 0 && (
            <div className="px-6 py-4 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Tips:
                </h4>
              </div>
              <ul className="space-y-1">
                {tips.map((tip, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    • {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
