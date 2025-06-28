import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useVarianceCalculation } from '../hooks/useVarianceCalculation';

interface VarianceDisplayProps {
  currentValue: number;
  originalValue: number;
}

const VarianceDisplay: React.FC<VarianceDisplayProps> = ({ currentValue, originalValue }) => {
  const { variance, varianceColor, formattedVariance } = useVarianceCalculation(currentValue, originalValue);
  
  const getVarianceIcon = () => {
    if (variance > 0) return <TrendingUp className="w-4 h-4 ml-2" />;
    if (variance < 0) return <TrendingDown className="w-4 h-4 ml-2" />;
    return <Minus className="w-4 h-4 ml-2" />;
  };
  
  const getVarianceStyles = () => {
    if (variance > 0) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (variance < 0) return 'bg-red-50 text-red-700 border-red-200';
    return 'bg-gray-50 text-gray-600 border-gray-200';
  };
  
  return (
    <div className={`inline-flex items-center px-3 py-2 rounded-lg border font-mono font-bold text-sm ${getVarianceStyles()}`}>
      {formattedVariance}
      {getVarianceIcon()}
    </div>
  );
};

export default VarianceDisplay;