import { IStatItem, StatItem } from './stat-item';
export interface ICompany {
  name: string;
  statistics: IStatItem[];
}

const mapOne = (data: any): ICompany => ({
  name: data.name,
  statistics: StatItem.mapArray(data.data),
});

const mapArray = (data: any[]): ICompany[] => data.map(mapOne);

export const Company = ({
  mapOne,
  mapArray,
});
