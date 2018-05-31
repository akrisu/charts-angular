import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

import { ChartType } from './chart-type.enum';
import { createChartDataset, IChartDatasetProperties } from './chart-dataset';
import { getChartOptions } from './chart-options';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit {
  @Input() public labels: string[];
  @Input() public dataSet: IChartDatasetProperties[];
  @Input() public name: string;
  @Input() public type: ChartType;

  public chart: Chart;

  ngAfterViewInit() {
    this.chart = new Chart(this.name, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: this.dataSet
      },
      options: getChartOptions(this.type)
    });
  }
}
