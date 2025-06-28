export interface TableRow {
  id: string;
  label: string;
  value: number;
  originalValue: number;
  children?: TableRow[];
}

export interface TableData {
  rows: TableRow[];
}