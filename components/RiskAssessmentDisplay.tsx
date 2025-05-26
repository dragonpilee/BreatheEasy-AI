
import React from 'react';
import { RiskAssessmentResponse } from '../types';
import { Card } from './Card';
import { AlertTriangleIcon, CheckCircleIcon, InfoIcon } from './Icons';

interface RiskAssessmentDisplayProps {
  assessment: RiskAssessmentResponse;
}

const getRiskColorAndIcon = (riskLevel: RiskAssessmentResponse['riskLevel']) => {
  switch (riskLevel) {
    case 'High':
      return { color: 'text-red-600 bg-red-100 border-red-500', icon: <AlertTriangleIcon className="w-8 h-8 text-red-500" /> };
    case 'Medium':
      return { color: 'text-yellow-600 bg-yellow-100 border-yellow-500', icon: <InfoIcon className="w-8 h-8 text-yellow-500" /> };
    case 'Low':
      return { color: 'text-green-600 bg-green-100 border-green-500', icon: <CheckCircleIcon className="w-8 h-8 text-green-500" /> };
    default:
      return { color: 'text-gray-600 bg-gray-100 border-gray-500', icon: <InfoIcon className="w-8 h-8 text-gray-500" /> };
  }
};

export const RiskAssessmentDisplay: React.FC<RiskAssessmentDisplayProps> = ({ assessment }) => {
  const { riskLevel, advice } = assessment;
  const { color, icon } = getRiskColorAndIcon(riskLevel);

  return (
    <Card>
      <div className={`p-6 rounded-lg border-l-4 ${color}`}>
        <div className="flex items-start space-x-4">
          <div>{icon}</div>
          <div>
            <h2 className={`text-2xl font-bold ${color.split(' ')[0]}`}>{riskLevel} Risk</h2>
            <p className="mt-2 text-gray-700">{advice}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
    