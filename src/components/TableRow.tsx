import React from 'react';
import { TableRow as TableRowType } from '../types';
import { useRowInput } from '../hooks/useRowInput';
import { applyPercentageIncrease } from '../utils/calculations';
import AllocationControls from './AllocationControls';
import VarianceDisplay from './VarianceDisplay';

interface TableRowProps {
  row: TableRowType;
  level: number;
  onUpdateValue: (id: string, newValue: number) => void;
}

const TableRow: React.FC<TableRowProps> = ({ row, level, onUpdateValue }) => {
  const { inputValue, clearInput, handleInputChange, getNumericValue } = useRowInput();
  
  const isParent = row.children && row.children.length > 0;
  const isInputDisabled = !inputValue.trim();
  
  const handlePercentageAllocation = () => {
    const percentage = getNumericValue();
    if (percentage !== null) {
      const newValue = applyPercentageIncrease(row.value, percentage);
      onUpdateValue(row.id, newValue);
      clearInput();
    }
  };
  
  const handleValueAllocation = () => {
    const value = getNumericValue();
    if (value !== null) {
      onUpdateValue(row.id, value);
      clearInput();
    }
  };
  
  const getRowClassName = () => {
    const baseClass = "border-b border-gray-100 transition-all duration-200 hover:bg-gradient-to-r";
    if (level === 0) {
      return `${baseClass} bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100`;
    }
    return `${baseClass} bg-white hover:from-gray-50 hover:to-gray-50`;
  };
  
  const getLabelClassName = () => {
    const indentClass = level > 0 ? `pl-${level * 8}` : '';
    const fontClass = isParent ? 'font-bold text-gray-900' : 'font-semibold text-gray-700';
    return `${indentClass} ${fontClass}`;
  };
  
  return (
    <>
      <tr className={getRowClassName()}>
        <td className="px-8 py-5 whitespace-nowrap">
          <div className={`flex items-center ${getLabelClassName()}`}>
            {level > 0 && (
              <div className="flex items-center mr-3">
                <div className="w-6 h-px bg-gray-300"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full ml-1"></div>
              </div>
            )}
            <span className={`${isParent ? 'text-lg' : 'text-base'}`}>
              {row.label}
            </span>
            {isParent && (
              <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border border-purple-200">
                Parent
              </span>
            )}
          </div>
        </td>
        
        <td className="px-8 py-5 whitespace-nowrap text-right">
          <div className="font-mono text-lg font-bold text-gray-900">
            {row.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </td>
        
        <AllocationControls
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onPercentageAllocation={handlePercentageAllocation}
          onValueAllocation={handleValueAllocation}
          disabled={isInputDisabled}
        />
        
        <td className="px-8 py-5 whitespace-nowrap text-right">
          <VarianceDisplay currentValue={row.value} originalValue={row.originalValue} />
        </td>
      </tr>
      
      {row.children?.map(child => (
        <TableRow
          key={child.id}
          row={child}
          level={level + 1}
          onUpdateValue={onUpdateValue}
        />
      ))}
    </>
  );
};

export default TableRow;