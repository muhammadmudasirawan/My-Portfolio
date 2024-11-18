import { Replay } from "@sentry/react";
import * as Sentry from "@sentry/nextjs"; // Import from @sentry/nextjs

Sentry.init({
  dsn: "https://3db1c5f4f9d514e8c52755d8542a9d53@o4508247247224832.ingest.us.sentry.io/4508247250501632", // Replace with your actual DSN
  integrations: [
    new Sentry.Replay({
      // `Replay` integration from `@sentry/nextjs`
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  tracesSampleRate: 1.0, // Adjust this based on your needs
  replaysSessionSampleRate: 0.1, // Adjust sample rate for replays
  replaysOnErrorSampleRate: 1.0, // Full replay on error
  debug: true, // Temporarily set to true to help with debugging
});
