import { getColors } from './colors';
import { ChartType } from './chart-type.enum';
import { prepend, repeat } from 'ramda';

export interface IChartDatasetProperties {
  label: string;
  data: number[];
  fill?: string | number | boolean;
}

export interface IChartDataset extends IChartDatasetProperties {
  borderColor: string;
  borderWidth: number;
  backgroundColor?: string;
  fill?: string | number | boolean;
  lineTension?: number;
  pointBackgroundColor?: string;
  pointBorderColor?: string;
  pointBorderWidth?: number;
  pointHoverBorderWidth?: number;
  pointHoverRadius?: number;
  pointRadius?: number | number[];
}

const defaultLineChartProperties = {
  backgroundColor: '#ddecf8',
  borderWidth: 5,
  fill: '-1',
  lineTension: 0,
  pointBorderColor: '#fff',
  pointBorderWidth: 3,
  pointHoverBorderWidth: 3,
  pointHoverRadius: 5,
  pointRadius: 5,
};

const defaultBarChartProperties = {
  borderWidth: 7,
};

const arrayFillWithDefaultRadius = (chartDataSetProperties: IChartDatasetProperties): number[] =>
  repeat(defaultLineChartProperties.pointRadius, chartDataSetProperties.data.length - 1);

const getDefaultChartProperties = (type: ChartType) => {
  switch (type) {
    case ChartType.Line:
      return defaultLineChartProperties;

    case ChartType.Bar:
    default:
      return defaultBarChartProperties;
  }
};

export const createChartDataset = (type: ChartType) => (chartDatasetProperties: IChartDatasetProperties, companyIndex: number) =>
  ({
    borderColor: getColors(companyIndex),
    ...(type === ChartType.Bar && { backgroundColor: getColors(companyIndex) }),
    ...(type === ChartType.Line && { pointBackgroundColor: getColors(companyIndex) }),
    ...getDefaultChartProperties(type),
    ...chartDatasetProperties,
    ...(type === ChartType.Line && { pointRadius: prepend(0, arrayFillWithDefaultRadius(chartDatasetProperties)) }),
  });
