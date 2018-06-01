import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UIModule } from '../ui/ui.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    UIModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
