import { Action } from '@ngrx/store';

import { ICompany } from './company';

export enum CompanyActionType {
  FetchCompanies = 'Fetch companies data',
  FetchCompaniesSuccess = 'Fetch companies data success',
  FetchCompaniesFailure = 'Fetch companies data failure',
}

export class FetchCompanyData implements Action {
  public readonly type = CompanyActionType.FetchCompanies;
}

export class FetchCompaniesDataSuccess implements Action {
  public readonly type = CompanyActionType.FetchCompaniesSuccess;

  constructor(public payload: ICompany[]) { }
}

export class FetchCompaniesDataFailure implements Action {
  public readonly type = CompanyActionType.FetchCompaniesFailure;
}

export type CompanyAction
  = FetchCompanyData
  | FetchCompaniesDataSuccess
  | FetchCompaniesDataFailure;
