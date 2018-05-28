import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartPanelComponent } from './chart-panel/chart-panel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChartPanelComponent,
  ],
  exports: [
    ChartPanelComponent,
  ]
})
export class UIModule { }
