import { createSelector } from '@ngrx/store';

import { IState } from '../store/state';

export const selectCompanyFeature = (state: IState) => state.company;
export const selectCompanies = createSelector(selectCompanyFeature, companies => companies.data);
export const isFetchingCompanies = createSelector(selectCompanyFeature, companies => companies.isFetching);
