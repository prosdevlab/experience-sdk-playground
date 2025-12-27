'use client';

import { useState, useEffect } from 'react';
import { Copy, Target, Lightbulb, FileJson, Activity, X } from 'lucide-react';
import { init, register, on, evaluate } from '@prosdevlab/experience-sdk';
import { bannerPlugin } from '@prosdevlab/experience-sdk-plugins';
import type { Experience } from '@prosdevlab/experience-sdk';
import { ConfigDisplay } from './ConfigDisplay';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface EventTrackingDemoProps {
  title: string;
  description: string | React.ReactNode;
  config: Experience;
  bestFor?: string[];
  tips?: string[];
}

interface CapturedEvent {
  type: string;
  timestamp: number;
  data: any;
}

export function EventTrackingDemo({
  title,
  description,
  config,
  bestFor,
  tips,
}: EventTrackingDemoProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [capturedEvents, setCapturedEvents] = useState<CapturedEvent[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Initialize SDK (if not already)
    init({
      debug: true,
      plugins: [bannerPlugin],
      consent: { required: false },
    });

    // Register this specific experience
    register(config.id, config);

    // Listen for impression (show) events BEFORE evaluating
    const unsubscribeShown = on('experiences:shown', (event: any) => {
      console.log('👁️ Show event captured:', event);
      
      const capturedEvent: CapturedEvent = {
        type: 'experiences:shown',
        timestamp: Date.now(),
        data: {
          experienceId: event.experienceId || config.id,
          experienceType: config.type || event.type,
          event: 'impression',
          context: {
            url: window.location.href,
            timestamp: event.timestamp || Date.now(),
          },
        },
      };

      setCapturedEvents((prev) => [capturedEvent, ...prev].slice(0, 5));
      setShowAlert(true);
    });

    // Listen for button click events
    const unsubscribe = on('experiences:action', (event: any) => {
      console.log('🎯 Event captured:', event);
      
      const capturedEvent: CapturedEvent = {
        type: 'experiences:action',
        timestamp: Date.now(),
        data: {
          experienceId: event.experienceId || config.id,
          experienceType: config.type,
          action: event.action,
          button: {
            text: event.text || event.button?.text,
            variant: event.variant || event.button?.variant,
            action: event.action,
            url: event.url,
            metadata: event.metadata,
          },
          context: {
            url: window.location.href,
            referrer: document.referrer,
            timestamp: event.timestamp || Date.now(),
          },
        },
      };

      setCapturedEvents((prev) => [capturedEvent, ...prev].slice(0, 5)); // Keep last 5 events
      setShowAlert(true);
    });

    // Listen for dismiss events
    const unsubscribeDismiss = on('experiences:dismissed', (event: any) => {
      console.log('❌ Dismiss event captured:', event);
      
      const capturedEvent: CapturedEvent = {
        type: 'experiences:dismissed',
        timestamp: Date.now(),
        data: {
          experienceId: event.experienceId || config.id,
          experienceType: config.type,
          action: 'dismiss',
          context: {
            url: window.location.href,
            timestamp: event.timestamp || Date.now(),
          },
        },
      };

      setCapturedEvents((prev) => [capturedEvent, ...prev].slice(0, 5));
      setShowAlert(true);
    });

    // Evaluate AFTER setting up all event listeners
    evaluate();

    return () => {
      unsubscribe?.();
      unsubscribeDismiss?.();
      unsubscribeShown?.();
    };
  }, [config]);

  const latestEvent = capturedEvents[0];

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      {/* Event Alert */}
      {showAlert && latestEvent && (
        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border-b border-blue-200 dark:border-blue-800">
          <Alert className="relative">
            <Activity className="h-4 w-4" />
            <button
              type="button"
              onClick={() => setShowAlert(false)}
              className="absolute top-3 right-3 p-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
            </button>
            <AlertTitle>Event Captured! 🎉</AlertTitle>
            <AlertDescription>
              <p className="text-sm mb-2">
                {latestEvent.type === 'experiences:dismissed' 
                  ? 'User dismissed the banner' 
                  : latestEvent.type === 'experiences:shown'
                  ? 'Banner displayed (impression tracked)'
                  : `User clicked: "${latestEvent.data.button?.text || latestEvent.data.action || 'button'}"`}
              </p>
              <div className="text-xs bg-white dark:bg-zinc-900 p-2 rounded border border-zinc-200 dark:border-zinc-700 overflow-x-auto font-mono">
                <pre>{JSON.stringify(latestEvent.data, null, 2)}</pre>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                💡 Send this payload to Google Tag Manager, Segment, or Lytics
              </p>
            </AlertDescription>
          </Alert>
        </div>
      )}

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
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {isExpanded ? 'Hide Config' : 'Show Config'}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-md">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Try it:</strong> The banner is live on this page! Click any button or dismiss it to see the event captured above.
          </p>
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
                    JSON.stringify(config, null, 2)
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

          {/* Event History */}
          {capturedEvents.length > 0 && (
            <div className="p-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Event History (Last {capturedEvents.length})
                </h4>
              </div>
              <div className="space-y-2">
                {capturedEvents.map((event, i) => (
                  <div
                    key={i}
                    className="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded border border-zinc-200 dark:border-zinc-700"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                        {event.type}
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-500">
                        {new Date(event.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <pre className="text-zinc-700 dark:text-zinc-300 overflow-x-auto">
                      {JSON.stringify(event.data, null, 2)}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

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

