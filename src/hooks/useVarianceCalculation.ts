import { useMemo } from 'react';
import { calculateVariance } from '../utils/calculations';

export const useVarianceCalculation = (currentValue: number, originalValue: number) => {
  const variance = useMemo(() => 
    calculateVariance(currentValue, originalValue), 
    [currentValue, originalValue]
  );
  
  const varianceColor = useMemo(() => {
    if (variance > 0) return 'text-emerald-700';
    if (variance < 0) return 'text-red-700';
    return 'text-gray-600';
  }, [variance]);
  
  const formattedVariance = useMemo(() => {
    const sign = variance > 0 ? '+' : '';
    return `${sign}${variance.toFixed(2)}%`;
  }, [variance]);
  
  return {
    variance,
    varianceColor,
    formattedVariance
  };
};