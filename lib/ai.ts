import { google } from '@ai-sdk/google'

// Central place to configure the AI model used across the app.
// Uses Google Gemini via the free Google Generative AI API.
// Requires the GOOGLE_GENERATIVE_AI_API_KEY environment variable.
export const chatModel = google('gemini-2.5-flash')
export const scoringModel = google('gemini-2.5-flash')
