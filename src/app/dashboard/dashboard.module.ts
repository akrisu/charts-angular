import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UIModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UIModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
