import React from 'react';
import { TableRow as TableRowType } from '../types';
import { useTableData } from '../hooks/useTableData';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import GrandTotalRow from './GrandTotalRow';

interface HierarchicalTableProps {
  initialData: TableRowType[];
}

const HierarchicalTable: React.FC<HierarchicalTableProps> = ({ initialData }) => {
  const { data, grandTotal, originalGrandTotal, updateValue } = useTableData(initialData);
  
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Allocation Management Dashboard</h2>
            <p className="text-slate-300">
              Manage values using percentage increases or direct value allocation
            </p>
          </div>
          <div className="text-right">
            <div className="text-slate-300 text-sm font-medium uppercase tracking-wide">Grand Total</div>
            <div className="text-3xl font-bold text-white">
              {grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <TableHeader />
          <tbody className="bg-white">
            {data.map(row => (
              <TableRow
                key={row.id}
                row={row}
                level={0}
                onUpdateValue={updateValue}
              />
            ))}
            <GrandTotalRow 
              currentTotal={grandTotal} 
              originalTotal={originalGrandTotal} 
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HierarchicalTable;