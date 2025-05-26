
import React from 'react';
import { UserData, SymptomSeverity, GeneralLevel, Symptoms } from '../types';
import { Card } from './Card';
import { SelectInput, SelectOption } from './SelectInput';
import { NumberInput } from './NumberInput';
import { CheckboxInput } from './CheckboxInput';
import { SYMPTOM_OPTIONS, LEVEL_OPTIONS } from '../constants';

interface UserInputFormProps {
  userData: UserData;
  onChange: (userData: UserData) => void;
}

const symptomSeverityOptions: SelectOption[] = SYMPTOM_OPTIONS.map(s => ({ value: s, label: s }));
const generalLevelOptions: SelectOption[] = LEVEL_OPTIONS.map(l => ({ value: l, label: l }));


export const UserInputForm: React.FC<UserInputFormProps> = ({ userData, onChange }) => {
  const handleSymptomChange = (symptomName: keyof Symptoms, value: string) => {
    onChange({
      ...userData,
      symptoms: {
        ...userData.symptoms,
        [symptomName]: value as SymptomSeverity,
      },
    });
  };

  const handlePeakFlowChange = (value: number | null) => {
    onChange({ ...userData, peakFlow: value });
  };

  const handleMedicationChange = (medicationName: keyof UserData['medication'], checked: boolean) => {
    onChange({
      ...userData,
      medication: {
        ...userData.medication,
        [medicationName]: checked,
      },
    });
  };

  const handleActivityLevelChange = (value: string) => {
    onChange({ ...userData, activityLevel: value as GeneralLevel });
  };

  const handleStressLevelChange = (value: string) => {
    onChange({ ...userData, stressLevel: value as GeneralLevel });
  };

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Log Your Data</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Symptoms Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectInput
                label="Cough"
                value={userData.symptoms.cough}
                options={symptomSeverityOptions}
                onChange={(e) => handleSymptomChange('cough', e.target.value)}
              />
              <SelectInput
                label="Wheeze"
                value={userData.symptoms.wheeze}
                options={symptomSeverityOptions}
                onChange={(e) => handleSymptomChange('wheeze', e.target.value)}
              />
              <SelectInput
                label="Shortness of Breath"
                value={userData.symptoms.shortnessOfBreath}
                options={symptomSeverityOptions}
                onChange={(e) => handleSymptomChange('shortnessOfBreath', e.target.value)}
              />
              <SelectInput
                label="Chest Tightness"
                value={userData.symptoms.chestTightness}
                options={symptomSeverityOptions}
                onChange={(e) => handleSymptomChange('chestTightness', e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Measurements & Medication</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <NumberInput
                label="Peak Flow (L/min)"
                value={userData.peakFlow}
                onChange={(value) => handlePeakFlowChange(value)}
                placeholder="e.g., 450"
              />
              <div className="space-y-2 pt-3 md:pt-0">
                 <label className="block text-sm font-medium text-gray-700 mb-1">Medication Usage</label>
                <CheckboxInput
                  label="Used Reliever Inhaler"
                  checked={userData.medication.relieverUsed}
                  onChange={(e) => handleMedicationChange('relieverUsed', e.target.checked)}
                />
                <CheckboxInput
                  label="Used Controller Inhaler (as prescribed)"
                  checked={userData.medication.controllerUsed}
                  onChange={(e) => handleMedicationChange('controllerUsed', e.target.checked)}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Lifestyle Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectInput
                label="Activity Level Today"
                value={userData.activityLevel}
                options={generalLevelOptions}
                onChange={(e) => handleActivityLevelChange(e.target.value)}
              />
              <SelectInput
                label="Stress Level Today"
                value={userData.stressLevel}
                options={generalLevelOptions}
                onChange={(e) => handleStressLevelChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
    