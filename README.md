# BreatheEasy AI: Asthma Prediction Assistant

![React](https://img.shields.io/badge/Frontend-React-61dafb)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8)
![Google Gemini API](https://img.shields.io/badge/AI-Gemini%20API-yellow)
![MIT License](https://img.shields.io/badge/License-MIT-green)

> If you find this project helpful, please consider ⭐ [starring the repository](https://github.com/dragonpilee/breatheeasy-ai)!

---

**BreatheEasy AI** is a web-based application designed to help users log asthma-related symptoms, lifestyle factors, and medication usage. It integrates with (mocked) environmental data and utilizes the Google Gemini API to provide a personalized asthma exacerbation risk assessment and actionable advice.

---

![BreatheEasy AI Screenshot](./pic.jpg)

---

## ✨ Core Features

- **Symptom & Data Logging:** Easily log daily symptoms (cough, wheeze, shortness of breath, chest tightness), peak flow measurements, medication usage (reliever/controller), activity levels, and stress levels.
- **Environmental Data Display:** Shows current (mocked) environmental conditions like AQI, pollen count, temperature, and humidity.
- **AI-Powered Risk Assessment:** Uses Google's Gemini API (`gemini-2.5`) to analyze user input and environmental data, predicting a risk level (Low, Medium, High) for asthma exacerbations.
- **Personalized Advice:** Provides brief, actionable advice based on the AI's assessment.
- **Responsive Design:** User interface built with Tailwind CSS for usability across different devices.

---

## 🛠️ Technology Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **AI Integration:** Google Gemini API (`@google/genai` SDK)
- **Module Loading:** ES Modules via import maps (using `esm.sh` for CDN)

---

## 🚀 Setup and Running the Application

This application is designed to run directly in a browser that supports modern JavaScript (ES Modules).

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge, Safari).
- An internet connection (for fetching CDN dependencies and API calls).

### API Key Configuration

This application requires a Google Gemini API Key to function correctly for the AI risk assessment feature.

1. **API Key:** The application's `geminiService.ts` file expects the API key to be available as `process.env.API_KEY`.

   For local development, you may temporarily hardcode your API key in `services/geminiService.ts` for testing:
   ```typescript
   // filepath: services/geminiService.ts
   // ...existing code...
   const getApiKey = (): string => {
     // const apiKey = process.env.API_KEY; // Original
     const apiKey = "YOUR_ACTUAL_API_KEY"; // Replace with your key for local testing
     if (!apiKey) {
       throw new Error("API_KEY environment variable not set or hardcoded key is missing.");
     }
     return apiKey;
   };
   // ...existing code...
   ```
   **Remove your hardcoded API key before sharing or deploying the code.**

### Running

1. **Ensure API Key is Set:** Make sure the API key is configured as described above.
2. **Open `index.html`:**
    - Serve the project directory using a simple HTTP server. For example, using Python:
        ```bash
        python -m http.server
        ```
        Then navigate to `http://localhost:8000` in your browser.
    - Alternatively, you may open `index.html` directly in your browser, but a local server is recommended for best compatibility.

---

## ⚠️ Disclaimer

This app provides predictions and insights to help you manage your asthma. It is **NOT a substitute for professional medical advice, diagnosis, or treatment.**

Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read or seen on this app.

The AI-generated risk assessment is based on the provided data and patterns learned by the model; it is for informational purposes only and may not be accurate in all cases.

---

## 👤 Developed By

Alan Cyril Sunny

---
