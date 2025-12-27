"use client";

import { ArrowLeft, Copy, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BannerLayoutGallery() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examples = [
    {
      title: "Compact Dark Banner (Nextra-style)",
      description: "Single-line, centered, dark theme announcement",
      preview: (
        <div
          className="relative rounded-lg"
          style={{
            background: "#111827",
            color: "#f9fafb",
            borderBottom: "none",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-center gap-4">
            <span className="text-sm font-medium">
              New features just dropped! Check out our latest updates.
            </span>
            <button
              type="button"
              className="text-sm font-medium text-blue-400 hover:underline"
            >
              See What's New
            </button>
            <button
              type="button"
              className="ml-4 text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ),
      code: `{
  id: 'announcement',
  type: 'banner',
  content: {
    message: 'New features just dropped! Check out our latest updates.',
    buttons: [
      { text: "See What's New", url: '/', variant: 'link' as const }
    ],
    dismissable: true,
    position: 'top' as const,
    style: {
      background: '#111827',
      color: '#f9fafb',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: '500',
      justifyContent: 'center',
      borderBottom: 'none',
    },
  },
  targeting: { url: { contains: '/' } },
  priority: 1,
}`,
      bestFor: [
        "Simple announcements",
        "Changelog updates",
        "Minimalist designs",
        "Dark mode themes",
      ],
      tips: [
        'Use `justifyContent: "center"` for centered text',
        "Keep messages very concise",
        "Link buttons are good for subtle CTAs",
      ],
    },
    {
      title: "Compact Promo Banner",
      description: "Compact, single-line promo with custom brand color",
      preview: (
        <div
          className="relative rounded-lg"
          style={{
            background: "#a6e3e3",
            color: "#1c1d1f",
            borderBottom: "none",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <span className="text-sm font-medium">
              <strong>Ends in 5h 59m 32s.</strong> One last deal | You've
              shopped for others. Now, get something for you. Courses from
              $9.99.
            </span>
            <button
              type="button"
              className="flex-shrink-0 text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ),
      code: `{
  id: 'compact-promo',
  type: 'banner',
  content: {
    message: '<strong>Ends in 5h 59m 32s.</strong> One last deal | You\\'ve shopped for others. Now, get something for you. Courses from $9.99.',
    buttons: [],
    dismissable: true,
    position: 'bottom' as const,
    style: {
      background: '#a6e3e3',
      color: '#1c1d1f',
      padding: '10px 0',
      fontSize: '14px',
      fontWeight: '500',
      borderBottom: 'none',
    },
  },
  targeting: { url: { contains: '/shop' } },
  priority: 5,
}`,
      bestFor: [
        "Time-sensitive promotions",
        "Single-line offers",
        "Minimalist calls to action",
        "Brand-specific color schemes",
      ],
      tips: [
        "Use `<strong>` for emphasis within the message",
        "Combine multiple short phrases with `|` for density",
        'Consider `position: "bottom"` for less intrusive promotions',
      ],
    },
    {
      title: "Multi-Button Feature Announcement",
      description: "Default layout with primary and secondary CTAs",
      preview: (
        <div
          className="relative rounded-lg border border-zinc-200 dark:border-zinc-800"
          style={{
            background: "#ffffff",
            color: "#111827",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-sm text-zinc-900 dark:text-zinc-50">
                <strong>New Feature:</strong> Real-time Analytics Dashboard is
                now live. Track your metrics instantly.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
                style={{ background: "#2563eb", color: "#ffffff" }}
              >
                Learn More
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
                style={{
                  background: "#f3f4f6",
                  color: "#374151",
                  border: "1px solid #e5e7eb",
                }}
              >
                Watch Demo
              </button>
              <button
                type="button"
                className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      ),
      code: `{
  id: 'feature-launch',
  type: 'banner',
  content: {
    message: '<strong>New Feature:</strong> Real-time Analytics Dashboard is now live. Track your metrics instantly.',
    buttons: [
      { text: 'Learn More', url: '/features/analytics', variant: 'primary' as const },
      { text: 'Watch Demo', url: '/demo/analytics', variant: 'secondary' as const }
    ],
    dismissable: true,
    position: 'top' as const,
  },
  targeting: { url: { contains: '/' } },
}`,
      bestFor: [
        "Feature announcements",
        "Product launches",
        "Major updates",
        "Event invitations",
      ],
      tips: [
        "Primary CTA = main action",
        "Secondary CTA = alternative action",
        "Keep both CTAs relevant to the message",
        "Test different CTA combinations",
      ],
    },
    {
      title: "Cookie Consent Style",
      description:
        "Multi-line compliance banner with inline links and multiple action buttons",
      preview: (
        <div
          className="relative rounded-lg border border-zinc-200 dark:border-zinc-700"
          style={{
            background: "#f5f5f5",
            color: "#333333",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-5">
            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
              This website uses cookies and similar technologies to collect
              information you provide and information about your interactions
              with our sites to improve your experience, analyze performance and
              traffic on our website and assist our marketing efforts and
              customer service. We may share this information with our
              third-party partners. You can change your{" "}
              <a href="#" className="text-blue-600 hover:underline">
                cookie preferences here
              </a>
              . By continuing to browse, you agree to our use of these tools in
              accordance with our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Notice
              </a>{" "}
              and you agree to the terms of our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
              .
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium rounded-md"
                style={{ background: "#0f172a", color: "#ffffff" }}
              >
                OK, got it
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium rounded-md"
                style={{ background: "#0f172a", color: "#ffffff" }}
              >
                Adjust preferences
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-zinc-700 hover:underline"
              >
                Read our Cookie Policy
              </button>
            </div>
          </div>
        </div>
      ),
      code: `{
  id: 'cookie-consent',
  type: 'banner',
  content: {
    message: 'This website uses cookies and similar technologies to collect information you provide and information about your interactions with our sites to improve your experience, analyze performance and traffic on our website and assist our marketing efforts and customer service. We may share this information with our third-party partners. You can change your <a href="/cookie-preferences">cookie preferences here</a>. By continuing to browse, you agree to our use of these tools in accordance with our <a href="/privacy">Privacy Notice</a> and you agree to the terms of our <a href="/terms">Terms of Service</a>.',
    buttons: [
      { text: 'OK, got it', action: 'accept-cookies', variant: 'primary' as const },
      { text: 'Adjust preferences', action: 'adjust-preferences', variant: 'primary' as const },
      { text: 'Read our Cookie Policy', url: '/cookie-policy', variant: 'link' as const }
    ],
    dismissable: false,
    position: 'bottom' as const,
    className: 'cookie-consent-banner',
    style: {
      background: '#f5f5f5',
      color: '#333333',
      flexDirection: 'column', // Stack content vertically
      alignItems: 'stretch', // Full width for text
    },
  },
  targeting: { url: { contains: '/' } },
}

// Additional CSS for button alignment:
// .cookie-consent-banner .xp-banner__buttons {
//   justify-content: flex-end;
// }`,
      bestFor: [
        "GDPR/CCPA compliance",
        "Privacy policy updates",
        "Data collection consent",
        "Cookie opt-in/opt-out",
      ],
      tips: [
        "Provide inline links to privacy policy and terms",
        "Use light neutral background for readability",
        "Set dismissable: false to require user interaction",
        "Align buttons to the right for professional look",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Examples
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Banner Layout Gallery
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Visual reference for styling and customizing banner experiences.
            Copy configurations and adapt them to your brand.
          </p>
        </div>

        {/* Examples */}
        <div className="space-y-12">
          {examples.map((example, index) => (
            <div
              key={index}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-950"
            >
              {/* Header */}
              <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {example.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {example.description}
                </p>
              </div>

              {/* Preview */}
              <div className="p-6 bg-zinc-100 dark:bg-zinc-900">
                {example.preview}
              </div>

              {/* Code */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    Configuration
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleCopy(example.code, index)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    {copiedIndex === index ? "Copied!" : "Copy Code"}
                  </button>
                </div>
                <pre className="text-xs bg-zinc-50 dark:bg-zinc-800 p-4 rounded border border-zinc-200 dark:border-zinc-700 overflow-x-auto">
                  <code className="font-mono leading-relaxed">
                    {example.code}
                  </code>
                </pre>
              </div>

              {/* Best For & Tips */}
              {(example.bestFor || example.tips) && (
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="grid md:grid-cols-2 gap-6">
                    {example.bestFor && (
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                          Best for:
                        </h4>
                        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                          {example.bestFor.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {example.tips && (
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Lightbulb className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                            Tips:
                          </h4>
                        </div>
                        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                          {example.tips.map((tip, i) => (
                            <li key={i}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CSS Classes Reference */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Available CSS Classes
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Use these classes with the{" "}
            <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-xs">
              className
            </code>{" "}
            prop:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                .xp-banner
              </code>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Main banner container
              </p>
            </div>
            <div>
              <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                .xp-banner--top
              </code>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Top-positioned banner
              </p>
            </div>
            <div>
              <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                .xp-banner--bottom
              </code>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Bottom-positioned banner
              </p>
            </div>
            <div>
              <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                .xp-banner__button
              </code>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Button element
              </p>
            </div>
            <div>
              <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                .xp-banner__button--primary
              </code>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Primary button variant
              </p>
            </div>
            <div>
              <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                .xp-banner__button--secondary
              </code>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Secondary button variant
              </p>
            </div>
            <div>
              <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                .xp-banner__button--link
              </code>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Link button variant
              </p>
            </div>
            <div>
              <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                .xp-banner__close
              </code>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Close/dismiss button
              </p>
            </div>
          </div>
        </div>

        {/* Documentation Link */}
        <div className="mt-8 text-center">
          <a
            href="https://prosdevlab.github.io/experience-sdk/reference/plugins#customization"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            View complete API documentation →
          </a>
        </div>
      </main>
    </div>
  );
}
