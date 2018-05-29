import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CompanyAction, CompanyActionType, FetchCompaniesDataFailure, FetchCompaniesDataSuccess } from './action';
import { CompanyService } from './service';

@Injectable()
export class CompanyEffect {
  @Effect()
  company$: Observable<CompanyAction> = this.actions$.pipe(
    ofType(CompanyActionType.FetchCompanies),
    switchMap(() => this.companyService.fetch().pipe(
      map(data => new FetchCompaniesDataSuccess(data)),
      catchError(() => of(new FetchCompaniesDataFailure)),
    ))
  );

  constructor(
    private companyService: CompanyService,
    private actions$: Actions,
  ) { }
}
