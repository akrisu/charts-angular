import { ChartType } from './chart-type.enum';
import { mergeDeepRight } from 'ramda';

const defaultChartOptions = ({
  legend: {
    reverse: false,
    position: 'bottom',
    labels: {
      usePointStyle: true,
    },
  },
  scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        ticks: {
          beginAtZero: false,
          stepSize: 500
        }
      }],
  }
});

const defaultLineChartOptions = ({
  legend: {
    reverse: true
  },
});

const defaultBarChartOptions = ({
  scales: {
    xAxes: [{
      barPercentage: 0.3,
      gridLines: {
        display: false,
      }
    }],
    yAxes: [{
      ticks: {
        stepSize: 5
      }
    }]
  }
});

const getDefaultChartOptions = (type: ChartType) => {
  switch (type) {
    case ChartType.Line:
      return defaultLineChartOptions;

    case ChartType.Bar:
    default:
      return defaultBarChartOptions;
  }
};

export const getChartOptions = (type: ChartType) => mergeDeepRight(defaultChartOptions, getDefaultChartOptions(type));
