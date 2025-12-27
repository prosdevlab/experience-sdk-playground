"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { EventTrackingDemo } from "../components/EventTrackingDemo";
import { featureAnnouncementBanner } from "../configs/promotions";

export default function FeatureAnnouncementPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/use-cases/promotions"
            className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Use Cases
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Event Tracking Demo
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            This page demonstrates how the Experience SDK captures structured
            events for analytics integration.
          </p>
        </div>

        <EventTrackingDemo
          title="Multi-Button Feature Announcement"
          description="Track button clicks and dismissals with rich event metadata for analytics"
          config={featureAnnouncementBanner}
          bestFor={[
            "Feature announcements",
            "Product launches",
            "Analytics integration (GTM, Segment, Lytics)",
            "Event tracking and attribution",
          ]}
          tips={[
            "Add metadata to buttons for enriched event tracking",
            "Listen to experiences:action events to send to your tag",
            "Track dismiss events to measure engagement",
            "Use action names for semantic event naming",
            "Primary CTA = highest value action",
          ]}
        />

        {/* Integration Guide */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            Integration with Analytics Tools
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            💡 <strong>Note:</strong> All buttons use{" "}
            <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-xs">
              action
            </code>{" "}
            instead of{" "}
            <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-xs">
              url
            </code>{" "}
            to prevent navigation and keep you on this demo page.
          </p>
          <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
            <div>
              <h3 className="font-semibold mb-2">Google Tag Manager:</h3>
              <pre className="bg-white dark:bg-zinc-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto text-xs">
                {`import { on } from '@prosdevlab/experience-sdk';

on('experiences:action', (event) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'experience_interaction',
    'experience_id': event.experienceId,
    'experience_type': event.experienceType,
    'button_text': event.text,
    'button_variant': event.variant,
    'action': event.action,
    'url': event.url,
    ...event.metadata
  });
});`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Segment (Analytics.js):</h3>
              <pre className="bg-white dark:bg-zinc-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto text-xs">
                {`import { on } from '@prosdevlab/experience-sdk';

on('experiences:action', (event) => {
  analytics.track('Experience Interaction', {
    experienceId: event.experienceId,
    experienceType: event.experienceType,
    buttonText: event.text,
    buttonVariant: event.variant,
    action: event.action,
    url: event.url,
    ...event.metadata
  });
});`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Lytics (jstag):</h3>
              <pre className="bg-white dark:bg-zinc-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto text-xs">
                {`import { on } from '@prosdevlab/experience-sdk';

on('experiences:action', (event) => {
  jstag.send({
    // Core experience identifiers
    'xp-experience-id': event.experienceId,
    'xp-experience-type': event.experienceType,
    'xp-action': event.action,
    'xp-event': 'click',
    
    // Button details
    'xp-button-text': event.text,
    'xp-button-variant': event.variant,
    
    // Enrichment from metadata
    'xp-category': event.metadata?.category,
    'xp-intent-level': event.metadata?.intent,
    'xp-content-type': event.metadata?.content_type,
  });
});

// Track impressions (shows)
on('experiences:shown', (event) => {
  jstag.send({
    'xp-experience-id': event.experienceId,
    'xp-experience-type': event.experienceType,
    'xp-event': 'show',
  });
});

// Track dismissals
on('experiences:dismissed', (event) => {
  jstag.send({
    'xp-experience-id': event.experienceId,
    'xp-experience-type': event.experienceType,
    'xp-action': 'dismiss',
    'xp-event': 'dismiss',
  });
});`}
              </pre>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                💡 Uses{" "}
                <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded">
                  xp-*
                </code>{" "}
                naming convention to distinguish Experience SDK events from
                other tools.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
