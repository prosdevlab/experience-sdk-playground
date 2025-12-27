import { ArrowLeft, Lightbulb, Megaphone, Rocket, Target } from "lucide-react";
import Link from "next/link";
import { ExampleDemo } from "../../components/ExampleDemo";
import {
  featureAnnouncementBanner,
  flashSaleBanner,
} from "../../configs/promotions";

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-4 text-sm">
            <Link
              href="/"
              className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-zinc-900 dark:text-zinc-50 font-medium">
              Use Cases
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-zinc-900 dark:text-zinc-50 font-medium">
              Promotions
            </span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Use Case
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Megaphone className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Promotions & Announcements
            </h1>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Drive conversions with timely, targeted promotional messages.
            Perfect for sales, product launches, and special offers.
          </p>
        </div>

        {/* Layout Info */}
        <div className="mb-8 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <strong>Currently using:</strong> Banner layout.{" "}
            <Link
              href="/layout-gallery/banner"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              See all banner options →
            </Link>
          </p>
        </div>

        {/* Examples */}
        <div className="space-y-6">
          <ExampleDemo
            title="1. Flash Sale Banner"
            description="Perfect for limited-time offers and urgent promotions"
            config={flashSaleBanner}
            bestFor={[
              "Time-sensitive offers",
              "Store-wide promotions",
              "Holiday sales",
              "Clearance events",
            ]}
            tips={[
              "Keep message under 60 characters for mobile",
              "Use action-oriented button text",
              "Set frequency cap to avoid fatigue (max 3 per day)",
              "Include urgency indicators (time, scarcity)",
            ]}
          />

          <ExampleDemo
            title="2. Multi-Button Feature Announcement"
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
        </div>

        {/* Layout Examples Link */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="p-6 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Looking for layout inspiration?
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Check out the Banner Layout Gallery for visual references,
                  styling options, and customization examples.
                </p>
                <Link
                  href="/layout-gallery/banner"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors text-sm"
                >
                  Browse Layout Gallery →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Best Practices for Promotional Banners
            </h2>
          </div>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Frequency capping:</strong> Limit to 3 impressions per day
              to avoid banner fatigue
            </li>
            <li>
              <strong>Always dismissable:</strong> Give users control to close
              the banner
            </li>
            <li>
              <strong>URL targeting:</strong> Show relevant offers based on page
              context
            </li>
            <li>
              <strong>A/B testing:</strong> Test different messages, CTAs, and
              placements
            </li>
            <li>
              <strong>Mobile-first:</strong> Keep messages concise for small
              screens
            </li>
            <li>
              <strong>Clear CTAs:</strong> Use action verbs and make buttons
              stand out
            </li>
          </ul>
        </div>

        {/* Advanced Integration */}
        <div className="mt-8 p-6 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Advanced: Lytics Integration
            </h2>
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
            Target promotions to specific user segments using Lytics audience
            data:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Show VIP discounts only to high-value customers</li>
            <li>• Display cart abandonment offers to users who left items</li>
            <li>• Personalize promotions by user interest or behavior</li>
            <li>• A/B test promotions across different audience segments</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 italic">
            Coming soon: jstag3 plugin integration examples
          </p>
        </div>
      </main>
    </div>
  );
}
