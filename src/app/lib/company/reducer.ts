import { Action } from '@ngrx/store';
import { ICompany } from 'app/lib/company/company';
import { CompanyActionType, CompanyAction } from 'app/lib/company/action';
import { ICompanyState } from './state';

const initialState: ICompanyState = {
  isFetching: false,
  data: [],
};

export const companyReducer = (state = initialState, action: CompanyAction): ICompanyState => {
  switch (action.type) {
    case CompanyActionType.FetchCompanies:
      return {
        ...state,
        isFetching: true,
      };

    case CompanyActionType.FetchCompaniesFailure:
      return {
        ...state,
        isFetching: false,
      };

    case CompanyActionType.FetchCompaniesSuccess:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
