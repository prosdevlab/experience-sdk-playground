"use client";

import type { Experience } from "@prosdevlab/experience-sdk";

export const flashSaleBanner: Experience = {
  id: "flash-sale",
  type: "banner",
  content: {
    title: "Winter Sale 2025",
    message:
      "20-40% Off Almost Everything | Free Shipping On Orders Over $99. Take additional 65% off with PROMO: <strong>WNTR011026</strong>",
    dismissable: true,
    position: "top" as const,
  },
  targeting: {
    url: {
      contains: "/shop",
    },
  },
  frequency: {
    max: 3,
    per: "day",
  },
  priority: 10, // Higher priority
};

export const productLaunchBanner: Experience = {
  id: "cookie-consent",
  type: "banner",
  content: {
    message:
      'This website uses cookies and similar technologies to collect information you provide and information about your interactions with our sites to improve your experience, analyze performance and traffic on our website and assist our marketing efforts and customer service. We may share this information with our third-party partners. You can change your <a href="/cookie-preferences">cookie preferences here</a>. By continuing to browse, you agree to our use of these tools in accordance with our <a href="/privacy">Privacy Notice</a> and you agree to the terms of our <a href="/terms">Terms of Service</a>.',
    buttons: [
      {
        text: "OK, got it",
        action: "accept-cookies",
        variant: "primary" as const,
      },
      {
        text: "Adjust preferences",
        action: "adjust-preferences",
        variant: "secondary" as const,
      },
      {
        text: "Read our Cookie Policy",
        url: "/cookie-policy",
        variant: "link" as const,
      },
    ],
    dismissable: false,
    position: "bottom" as const,
    style: {
      padding: "20px",
      background: "#f5f5f5",
      color: "#333333",
    },
  },
  targeting: {},
};

export const featureAnnouncementBanner: Experience = {
  id: "feature-launch",
  type: "banner",
  content: {
    title: "New: AI-Powered Analytics Dashboard",
    message:
      "Get real-time insights with machine learning. Track conversions, predict trends, and optimize campaigns—all in one place.",
    buttons: [
      {
        text: "Start Free Trial",
        action: "start-trial",
        variant: "primary" as const,
        metadata: {
          category: "conversion",
          intent: "high",
          trial_duration: "14-days",
        },
      },
      {
        text: "Watch 2-Min Demo",
        action: "watch-demo",
        variant: "secondary" as const,
        metadata: {
          category: "video",
          duration: "2min",
          content_type: "product_demo",
        },
      },
      {
        text: "View Documentation",
        action: "view-docs",
        variant: "link" as const,
        metadata: {
          category: "education",
          content_type: "docs",
          feature: "analytics",
          intended_url: "/docs/analytics",
        },
      },
    ],
    dismissable: true, // Track dismiss events too
    position: "top" as const,
  },
  targeting: {},
};

// Compact Dark Banner (Nextra-style)
export const announcementBanner: Experience = {
  id: "announcement",
  type: "banner",
  content: {
    message: "🎉 Nextra 4.0 has been released. Read blogpost →",
    buttons: [
      {
        text: "Learn More",
        url: "/changelog",
        variant: "link" as const,
        className: "text-white hover:text-gray-300",
      },
    ],
    dismissable: true,
    position: "top" as const,
    className: "compact-dark-banner",
    style: {
      background: "#000000",
      color: "#ffffff",
      padding: "8px 0",
      fontSize: "14px",
      borderBottom: "1px solid #333333",
    },
  },
  targeting: {
    url: {
      contains: "/",
    },
  },
  frequency: {
    max: 1,
    per: "day",
  },
};

// Compact Teal Banner (Udemy-style)
export const compactPromoBanner: Experience = {
  id: "compact-promo",
  type: "banner",
  content: {
    message:
      "<strong>Ends in 5h 59m 32s.</strong> One last deal | You've shopped for others. Now, get something for you. 5 impressions banner.",
    buttons: [],
    dismissable: true,
    position: "top" as const, // Changed to bottom to stack
    className: "compact-promo-banner",
    style: {
      background: "#a6e3e3",
      color: "#1c1d1f",
      padding: "10px 0",
      fontSize: "14px",
      fontWeight: "500",
      borderBottom: "none",
    },
  },
  targeting: {
    url: {
      contains: "/shop",
    },
  },
  frequency: {
    max: 5,
    per: "day",
  },
  priority: 5, // Lower priority
};
