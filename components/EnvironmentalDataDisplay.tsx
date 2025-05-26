
import React from 'react';
import { EnvironmentalData } from '../types';
import { Card } from './Card';
import { SunIcon, CloudIcon, ThermometerIcon, DropletIcon } from './Icons'; // Assuming these icons are created

interface EnvironmentalDataDisplayProps {
  data: EnvironmentalData;
}

const DataPoint: React.FC<{ icon: React.ReactNode; label: string; value: string | number; unit?: string }> = ({ icon, label, value, unit }) => (
  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
    <div className="text-indigo-500">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-700">
        {value} {unit}
      </p>
    </div>
  </div>
);

export const EnvironmentalDataDisplay: React.FC<EnvironmentalDataDisplayProps> = ({ data }) => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Environment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DataPoint icon={<CloudIcon className="w-6 h-6"/>} label="AQI" value={data.aqi} />
          <DataPoint icon={<SunIcon className="w-6 h-6"/>} label="Pollen Count" value={data.pollenCount} />
          <DataPoint icon={<ThermometerIcon className="w-6 h-6"/>} label="Temperature" value={data.temperature} unit="°C" />
          <DataPoint icon={<DropletIcon className="w-6 h-6"/>} label="Humidity" value={data.humidity} unit="%" />
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center">Environmental data is illustrative.</p>
      </div>
    </Card>
  );
};
    