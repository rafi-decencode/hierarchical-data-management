import { useState, useCallback } from 'react';

export const useRowInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  
  const clearInput = useCallback(() => {
    setInputValue('');
  }, []);
  
  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);
  
  const getNumericValue = useCallback(() => {
    const value = parseFloat(inputValue);
    return isNaN(value) ? null : value;
  }, [inputValue]);
  
  return {
    inputValue,
    clearInput,
    handleInputChange,
    getNumericValue
  };
};