"use client";

import type { Decision } from "@prosdevlab/experience-sdk";
import { evaluateAll, register } from "@prosdevlab/experience-sdk";
import JsonView from "@uiw/react-json-view";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  RotateCcw,
  Target,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { flashSaleBanner } from "../configs/promotions";

export default function ShopPage() {
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const decision = decisions[0]; // Use first decision for explainability

  useEffect(() => {
    // Register both banners that target /shop
    register(flashSaleBanner.id, flashSaleBanner);

    const results = evaluateAll(); // Use evaluateAll to get multiple banners
    setDecisions(results);

    console.log("✅ Shop banners registered:", {
      flashSale: flashSaleBanner.id,
    });
    console.log("📊 Evaluation results:", results);
    console.log("🔍 Current URL:", window.location.href);
  }, []);

  const handleReset = () => {
    // Clear frequency data for both shop banners
    localStorage.removeItem(`experiences:frequency:${flashSaleBanner.id}`);

    console.log("🔄 Cleared frequency data for shop banners");

    // Reload page to re-evaluate
    window.location.reload();
  };

  const formatTimestamp = (ts: number) => {
    return new Date(ts).toLocaleTimeString();
  };

  const JsonDisplay = ({ data }: { data: any }) => {
    if (!data || typeof data !== "object") {
      return (
        <div className="bg-zinc-50 dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700">
          <code className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
            {String(data)}
          </code>
        </div>
      );
    }

    return (
      <div className="bg-zinc-50 dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700">
        <JsonView
          value={data}
          collapsed={false}
          displayDataTypes={false}
          displayObjectSize={false}
          enableClipboard={false}
          style={{
            fontSize: "12px",
            fontFamily: "ui-monospace, monospace",
            backgroundColor: "transparent",
          }}
        />
      </div>
    );
  };

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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Shop Demo Page
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            This page demonstrates how the SDK evaluates and shows banners, with
            full explainability of the decision process.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">
            Banners target URLs containing &quot;/shop&quot; and respect
            frequency capping.
          </p>

          {/* Reset Button */}
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-800 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Frequency Data
          </button>
        </div>

        {/* Explainability Section - Show for first decision only */}
        {decisions.length > 0 && decisions[0] && (
          <div className="space-y-6 text-left">
            {/* Decision Summary */}
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Decision Summary
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  {decision.show ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {decision.show ? "Banner Shown" : "Banner Hidden"}
                    </div>
                    {decision.experienceId && (
                      <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                        Experience ID:{" "}
                        <code className="px-1 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded">
                          {decision.experienceId}
                        </code>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Reasons:
                  </div>
                  <ul className="space-y-1">
                    {decision.reasons.map((reason, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-zinc-400 dark:text-zinc-600">
                          •
                        </span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Trace Steps */}
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Evaluation Trace
                </h2>
              </div>

              <div className="space-y-3">
                {decision.trace.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${step.passed ? "bg-green-500" : "bg-red-500"}`}
                        />
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                          {step.step}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-500">
                        {step.duration}ms
                      </span>
                    </div>

                    <div className="text-xs space-y-2 ml-4">
                      <div>
                        <span className="text-zinc-500 dark:text-zinc-500 font-medium">
                          Input:
                        </span>
                        <JsonDisplay data={step.input} />
                      </div>
                      <div>
                        <span className="text-zinc-500 dark:text-zinc-500 font-medium">
                          Output:
                        </span>
                        <JsonDisplay data={step.output} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metadata */}
              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500">
                      Total Duration
                    </div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {decision.metadata.totalDuration}ms
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500">
                      Experiences Evaluated
                    </div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {decision.metadata.experiencesEvaluated}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500">
                      Evaluated At
                    </div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {formatTimestamp(decision.metadata.evaluatedAt)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Context */}
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Evaluation Context
              </h2>
              <JsonDisplay data={decision.context} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
