import React from 'react';
import { Calculator, Target } from 'lucide-react';

interface AllocationControlsProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onPercentageAllocation: () => void;
  onValueAllocation: () => void;
  disabled: boolean;
}

const AllocationControls: React.FC<AllocationControlsProps> = ({
  inputValue,
  onInputChange,
  onPercentageAllocation,
  onValueAllocation,
  disabled
}) => {
  return (
    <>
      <td className="px-8 py-5">
        <div className="flex justify-center">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            className="w-24 px-4 py-3 border-2 border-gray-200 rounded-lg text-center text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-white shadow-sm"
            placeholder="0"
            step="0.01"
          />
        </div>
      </td>
      
      <td className="px-8 py-5">
        <div className="flex justify-center">
          <button
            onClick={onPercentageAllocation}
            disabled={disabled}
            className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Alloc %
          </button>
        </div>
      </td>
      
      <td className="px-8 py-5">
        <div className="flex justify-center">
          <button
            onClick={onValueAllocation}
            disabled={disabled}
            className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Target className="w-4 h-4 mr-2" />
            Alloc Val
          </button>
        </div>
      </td>
    </>
  );
};

export default AllocationControls;