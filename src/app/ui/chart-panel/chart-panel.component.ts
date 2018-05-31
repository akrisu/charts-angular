import { Component, OnInit, Input, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

import { ChartType } from '../chart/chart-type.enum';
import { IChartDatasetProperties } from '../chart/chart-dataset';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.css']
})
export class ChartPanelComponent {
  @Input() public buttonCaption: string;
  @Input() public chartDescription: string;
  @Input() public chartLabels: string[];
  @Input() public dataSet: IChartDatasetProperties[];
  @Input() public name: string;
  @Input() public summary: number;
  @Input() public title: string;
  @Input() public type: ChartType;

  public readonly ChartType = ChartType;
}
