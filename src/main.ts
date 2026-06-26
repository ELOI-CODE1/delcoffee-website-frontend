import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { inject } from '@vercel/analytics';
import { SpeedInsights } from "@vercel/speed-insights/next"

// Initialize Vercel Analytics
inject();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));