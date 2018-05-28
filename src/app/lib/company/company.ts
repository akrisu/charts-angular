interface IStatItem {
  week: number;
  revenue: number;
  installations: number;
}

export interface ICompany {
  name: string;
  statistics: IStatItem[];
}
