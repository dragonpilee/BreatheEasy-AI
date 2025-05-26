
import { EnvironmentalData, GeneralLevel } from './types';

export const DEFAULT_ENVIRONMENTAL_DATA: EnvironmentalData = {
  aqi: 75,
  pollenCount: GeneralLevel.MEDIUM,
  temperature: 22,
  humidity: 60,
};

export const SYMPTOM_OPTIONS = ["None", "Mild", "Moderate", "Severe"];
export const LEVEL_OPTIONS = ["None", "Low", "Medium", "High"];

export const MOCK_API_KEY_NOTE = "Note: This app uses a placeholder for the Gemini API Key. In a real production environment, API keys must be securely managed and not exposed client-side. Ensure process.env.API_KEY is set in your environment for the Gemini API calls to function.";
    