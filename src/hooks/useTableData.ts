import { useState, useCallback, useMemo } from 'react';
import { TableRow } from '../types';
import { updateRowRecursively, calculateGrandTotal } from '../utils/calculations';

export const useTableData = (initialData: TableRow[]) => {
  const [data, setData] = useState<TableRow[]>(initialData);
  
  const grandTotal = useMemo(() => calculateGrandTotal(data), [data]);
  const originalGrandTotal = useMemo(() => calculateGrandTotal(initialData), [initialData]);
  
  const updateValue = useCallback((id: string, newValue: number) => {
    setData(prevData => updateRowRecursively(prevData, id, newValue));
  }, []);
  
  const resetData = useCallback(() => {
    setData(initialData);
  }, [initialData]);
  
  return {
    data,
    grandTotal,
    originalGrandTotal,
    updateValue,
    resetData
  };
};