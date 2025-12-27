import Link from 'next/link';
import { Target, Wrench, Megaphone, User, Mail, CheckCircle, Clock, BookOpen, MessageSquare, Square, MessageCircle, ArrowRight, Layout } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Experience SDK Examples
          </h1>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Interactive Examples & Implementation Guides
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Explore production-ready configurations, test targeting rules, and discover layout patterns for your next experience.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-center">
            How do you want to explore?
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Use Cases Card */}
            <div className="p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <div className="mb-4">
                <Target className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                By Use Case
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Perfect for:
              </p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1 mb-6">
                <li>• Product teams</li>
                <li>• Marketers</li>
                <li>• Learning the SDK</li>
              </ul>
              <Link
                href="/use-cases/promotions"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Use Cases →
              </Link>
            </div>

            {/* Layouts Card */}
            <div className="p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <div className="mb-4">
                <Wrench className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                Layout Gallery
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Perfect for:
              </p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1 mb-6">
                <li>• Developers</li>
                <li>• Visual reference</li>
                <li>• Styling inspiration</li>
              </ul>
              <Link
                href="/layout-gallery/banner"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Browse Gallery →
              </Link>
            </div>
          </div>
        </div>

        {/* Use Cases List */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Available Use Cases
          </h3>
          <div className="space-y-3">
            <div className="block p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Megaphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      Promotions & Announcements
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded inline-flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Available
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    Drive conversions with timely messages • 2 examples • Banner layout
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/use-cases/promotions"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Examples →
                    </Link>
                    <span className="text-zinc-300 dark:text-zinc-700">|</span>
                    <Link
                      href="/layout-gallery/banner"
                      className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                    >
                      See all banner layouts
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="block p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg opacity-60">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-zinc-500 dark:text-zinc-600" />
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      User Guidance & Onboarding
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    Educate and onboard your users
                  </p>
                </div>
              </div>
            </div>

            <div className="block p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg opacity-60">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-zinc-500 dark:text-zinc-600" />
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      Email Collection
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    Grow your list with smart forms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <a
            href="https://prosdevlab.github.io/experience-sdk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            Read the Docs
          </a>
        </div>
      </main>
    </div>
  );
}
