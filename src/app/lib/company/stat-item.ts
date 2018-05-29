export interface IStatItem {
  week: number;
  revenue: number;
  installations: number;
}

const mapOne = (data: any): IStatItem => ({
  week: data.week,
  revenue: data.revenue,
  installations: data.installations,
});

const mapArray = (data: any[]) => data.map(mapOne);

export const StatItem = ({
  mapOne,
  mapArray,
});
