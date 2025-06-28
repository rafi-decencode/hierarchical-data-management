import { TableRow } from '../types';

export const calculateParentValue = (children: TableRow[]): number => {
  return children.reduce((sum, child) => sum + child.value, 0);
};

export const calculateVariance = (currentValue: number, originalValue: number): number => {
  if (originalValue === 0) return 0;
  return ((currentValue - originalValue) / originalValue) * 100;
};

export const updateRowRecursively = (
  rows: TableRow[],
  targetId: string,
  newValue: number
): TableRow[] => {
  return rows.map(row => {
    if (row.id === targetId) {
      const updatedRow = { ...row, value: newValue };
      
      // If this is a parent row with children, distribute the new value proportionally
      if (row.children && row.children.length > 0) {
        const currentTotal = calculateParentValue(row.children);
        if (currentTotal > 0) {
          const updatedChildren = row.children.map(child => {
            const proportion = child.value / currentTotal;
            return { ...child, value: Math.round((newValue * proportion) * 100) / 100 };
          });
          updatedRow.children = updatedChildren;
        }
      }
      
      return updatedRow;
    }
    
    if (row.children) {
      const updatedChildren = updateRowRecursively(row.children, targetId, newValue);
      const updatedRow = {
        ...row,
        children: updatedChildren,
        value: calculateParentValue(updatedChildren)
      };
      return updatedRow;
    }
    
    return row;
  });
};

export const applyPercentageIncrease = (currentValue: number, percentage: number): number => {
  return Math.round(currentValue * (1 + percentage / 100) * 100) / 100;
};

export const calculateGrandTotal = (rows: TableRow[]): number => {
  return rows.reduce((sum, row) => sum + row.value, 0);
};