import React from 'react';

const TableHeader: React.FC = () => {
  return (
    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
      <tr className="border-b-2 border-gray-200">
        <th className="px-8 py-6 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
          Item
        </th>
        <th className="px-8 py-6 text-right text-sm font-bold text-gray-900 uppercase tracking-wider">
          Value
        </th>
        <th className="px-8 py-6 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
          Input
        </th>
        <th className="px-8 py-6 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
          Allocation %
        </th>
        <th className="px-8 py-6 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
          Allocation Val
        </th>
        <th className="px-8 py-6 text-right text-sm font-bold text-gray-900 uppercase tracking-wider">
          Variance %
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;