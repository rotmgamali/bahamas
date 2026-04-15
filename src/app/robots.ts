import type { MetadataRoute } from "next";

/**
 * robots.txt generator.
 *
 * Explicitly allows AI crawlers so ChatGPT, Claude, Perplexity, Google's AI
 * Overviews, etc. can index and cite this venue when users ask about
 * corporate retreat options near Florida.
 *
 * If the venue later wants to block AI crawling, set `allow: []` for the
 * relevant user-agent.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All standard search engines
      {
        userAgent: "*",
        allow: "/",
      },
      // OpenAI ChatGPT — training and browsing
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // Anthropic Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Google AI Overviews / Gemini
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Microsoft Copilot / Bing AI
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      // Common Crawl (LLM training data)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Apple Intelligence / Siri
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://www.firmconnectus.net/sitemap.xml",
    host: "https://www.firmconnectus.net",
  };
}
