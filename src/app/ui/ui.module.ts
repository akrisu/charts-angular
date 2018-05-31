import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartPanelComponent } from './chart-panel/chart-panel.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChartComponent,
    ChartPanelComponent,
  ],
  exports: [
    ChartPanelComponent,
  ]
})
export class UIModule { }
