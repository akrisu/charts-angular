import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CompanyEffect } from './effect';
import { CompanyService } from './service';

@NgModule({
  imports: [
    EffectsModule.forFeature([CompanyEffect]),
  ],
  providers: [
    CompanyService,
  ],
})
export class CompanyModule {}
