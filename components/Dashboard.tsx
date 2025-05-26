
import React, { useState, useCallback } from 'react';
import { UserInputForm } from './UserInputForm';
import { EnvironmentalDataDisplay } from './EnvironmentalDataDisplay';
import { RiskAssessmentDisplay } from './RiskAssessmentDisplay';
import { Card } from './Card';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';
import { UserData, EnvironmentalData, RiskAssessmentResponse, SymptomSeverity, GeneralLevel } from '../types';
import { DEFAULT_ENVIRONMENTAL_DATA } from '../constants';
import { assessAsthmaRisk } from '../services/geminiService';

export const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    symptoms: {
      cough: SymptomSeverity.NONE,
      wheeze: SymptomSeverity.NONE,
      shortnessOfBreath: SymptomSeverity.NONE,
      chestTightness: SymptomSeverity.NONE,
    },
    peakFlow: null,
    medication: {
      relieverUsed: false,
      controllerUsed: false,
    },
    activityLevel: GeneralLevel.NONE,
    stressLevel: GeneralLevel.NONE,
  });

  const [environmentalData, setEnvironmentalData] = useState<EnvironmentalData>(DEFAULT_ENVIRONMENTAL_DATA);
  const [riskAssessment, setRiskAssessment] = useState<RiskAssessmentResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const handleUserInputChange = useCallback((newUserData: UserData) => {
    setUserData(newUserData);
  }, []);

  const handleAssessRisk = async () => {
    setIsLoading(true);
    setError(null);
    setRiskAssessment(null);

    try {
      const result = await assessAsthmaRisk(userData, environmentalData);
      setRiskAssessment(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred while assessing risk.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UserInputForm userData={userData} onChange={handleUserInputChange} />
        </div>
        <div className="space-y-6">
          <EnvironmentalDataDisplay data={environmentalData} />
           <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">AI Risk Assessment</h2>
              <Button onClick={handleAssessRisk} disabled={isLoading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                {isLoading ? <LoadingSpinner /> : "Assess My Risk"}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {error && (
        <Card>
          <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
            <h3 className="font-semibold">Error</h3>
            <p>{error}</p>
          </div>
        </Card>
      )}
      {riskAssessment && !isLoading && <RiskAssessmentDisplay assessment={riskAssessment} />}
    </div>
  );
};
