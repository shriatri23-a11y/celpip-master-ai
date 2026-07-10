import { google } from '@ai-sdk/google'

// Central place to configure the AI model used across the app.
// Uses Google Gemini via the free Google Generative AI API.
// Requires the GOOGLE_GENERATIVE_AI_API_KEY environment variable.
// `gemini-flash-latest` is a stable alias that always points to the current
// Gemini Flash model, so it keeps working as older versions are retired.
export const chatModel = google('gemini-flash-latest')
export const scoringModel = google('gemini-flash-latest')
