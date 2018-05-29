import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CompanyModule } from 'app/lib/company/module';
import { AppStoreModule } from 'app/lib/store/module';

import { AppComponent } from './app.component';

export const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([]),
    AppStoreModule,
    CompanyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
