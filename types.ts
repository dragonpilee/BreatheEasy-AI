
export enum SymptomSeverity {
  NONE = "None",
  MILD = "Mild",
  MODERATE = "Moderate",
  SEVERE = "Severe",
}

export enum GeneralLevel {
  NONE = "None",
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export interface Symptoms {
  cough: SymptomSeverity;
  wheeze: SymptomSeverity;
  shortnessOfBreath: SymptomSeverity;
  chestTightness: SymptomSeverity;
}

export interface MedicationUsage {
  relieverUsed: boolean;
  controllerUsed: boolean;
}

export interface UserData {
  symptoms: Symptoms;
  peakFlow: number | null;
  medication: MedicationUsage;
  activityLevel: GeneralLevel;
  stressLevel: GeneralLevel;
}

export interface EnvironmentalData {
  aqi: number;
  pollenCount: GeneralLevel;
  temperature: number; // Celsius
  humidity: number; // Percentage
}

export interface RiskAssessmentResponse {
  riskLevel: "Low" | "Medium" | "High" | "Unknown";
  advice: string;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web?: GroundingChunkWeb;
  // Other types of chunks can be added here if needed
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
  // other grounding metadata fields
}
    