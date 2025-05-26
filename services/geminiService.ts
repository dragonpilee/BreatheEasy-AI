
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { UserData, EnvironmentalData, RiskAssessmentResponse } from '../types';

const API_KEY = process.env.API_KEY;

const parseGeminiResponse = (responseText: string): RiskAssessmentResponse => {
  const riskMatch = responseText.match(/Risk:\s*(Low|Medium|High)/i);
  const adviceMatch = responseText.match(/Advice:\s*(.*)/is);

  let riskLevel: RiskAssessmentResponse['riskLevel'] = "Unknown";
  if (riskMatch && riskMatch[1]) {
    const matchedLevel = riskMatch[1].toLowerCase();
    if (matchedLevel === 'low') riskLevel = 'Low';
    else if (matchedLevel === 'medium') riskLevel = 'Medium';
    else if (matchedLevel === 'high') riskLevel = 'High';
  }
  
  const advice = adviceMatch && adviceMatch[1] ? adviceMatch[1].trim() : "No specific advice provided.";

  return {
    riskLevel,
    advice,
  };
};

export const assessAsthmaRisk = async (
  userData: UserData,
  environmentalData: EnvironmentalData
): Promise<RiskAssessmentResponse> => {
  if (!API_KEY) {
    console.error("Gemini API Key is not configured. Please set process.env.API_KEY.");
    throw new Error("Configuration error: Gemini API Key not found. The app administrator needs to set it up.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  const prompt = `
    You are an AI assistant for an asthma management app. Based on the following user-logged data and environmental conditions, provide an asthma exacerbation risk assessment.

    User Data:
    - Symptoms:
      - Cough: ${userData.symptoms.cough}
      - Wheeze: ${userData.symptoms.wheeze}
      - Shortness of Breath: ${userData.symptoms.shortnessOfBreath}
      - Chest Tightness: ${userData.symptoms.chestTightness}
    - Peak Flow: ${userData.peakFlow !== null ? `${userData.peakFlow} L/min` : 'Not provided'}
    - Medication:
      - Reliever Inhaler Used Recently: ${userData.medication.relieverUsed ? 'Yes' : 'No'}
      - Controller Inhaler Used (as prescribed): ${userData.medication.controllerUsed ? 'Yes' : 'No'}
    - Activity Level Today: ${userData.activityLevel}
    - Stress Level Today: ${userData.stressLevel}

    Environmental Data (Illustrative):
    - Air Quality Index (AQI): ${environmentalData.aqi}
    - Pollen Count: ${environmentalData.pollenCount}
    - Temperature: ${environmentalData.temperature}°C
    - Humidity: ${environmentalData.humidity}%

    Output the risk level (Low, Medium, or High) and a brief, actionable piece of advice (1-2 sentences related to asthma management given the inputs).
    Structure your response EXACTLY as follows:
    Risk: [Low/Medium/High]
    Advice: [Your advice here]
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17', // Using the specified model
      contents: prompt,
      // Omit thinkingConfig for default (higher quality)
    });
    
    const responseText = response.text;
    if (!responseText) {
        throw new Error("Received an empty response from the AI.");
    }
    return parseGeminiResponse(responseText);

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && error.message.includes("API key not valid")) {
        throw new Error("Invalid API Key. Please check your Gemini API Key.");
    }
    throw new Error(`Failed to get assessment from AI. Details: ${error instanceof Error ? error.message : String(error)}`);
  }
};
    