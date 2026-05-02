interface tableContent {
  tableMap: Record<string, boolean>;
  maxRow: number;
  maxColumn: number;
}

export default function generateCheckTable(data: checkRow[]): tableContent {
  let tableMap: Record<string, boolean> = {};
  let maxRow: number = 1;
  let maxColumn: number = 1;

  for (let i: number = 0; i < data.length; i++) {
    for (let j: number = 0; j < data[i].count; j++) {
      const key: string = `${i}:${j}`;
      tableMap[key] = false;
    }
    maxColumn = Math.max(maxColumn, data[i].count);
    maxRow = i;
  }
  return { tableMap, maxRow, maxColumn };
}
