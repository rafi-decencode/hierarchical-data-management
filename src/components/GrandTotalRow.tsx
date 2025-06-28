import React from 'react';
import VarianceDisplay from './VarianceDisplay';

interface GrandTotalRowProps {
  currentTotal: number;
  originalTotal: number;
}

const GrandTotalRow: React.FC<GrandTotalRowProps> = ({ currentTotal, originalTotal }) => {
  return (
    <tr className="bg-gradient-to-r from-slate-100 to-slate-200 border-t-4 border-slate-300">
      <td className="px-8 py-6 font-bold text-lg text-slate-900">
        Grand Total
      </td>
      <td className="px-8 py-6 text-right">
        <div className="font-mono text-xl font-bold text-slate-900">
          {currentTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </td>
      <td className="px-8 py-6"></td>
      <td className="px-8 py-6"></td>
      <td className="px-8 py-6"></td>
      <td className="px-8 py-6 text-right">
        <VarianceDisplay currentValue={currentTotal} originalValue={originalTotal} />
      </td>
    </tr>
  );
};

export default GrandTotalRow;