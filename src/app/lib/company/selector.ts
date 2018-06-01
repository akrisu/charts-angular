import { createSelector, MemoizedSelector } from '@ngrx/store';
import { uniq } from 'ramda';

import { IChartDatasetProperties } from '../../ui/chart/chart-dataset';
import { IState } from '../store/state';

export const selectCompanyFeature = (state: IState) => state.company;
export const selectCompanies = createSelector(selectCompanyFeature, companies => companies.data);
export const isFetchingCompanies = createSelector(selectCompanyFeature, companies => companies.isFetching);

export const selectChartLabels = createSelector(
  selectCompanies,
  companies =>
    uniq(
      companies
        .map(company => company.statistics)
        .map(statistics => statistics.map(statistic => statistic.week))
        .reduce((acc, value) => [...acc, ...value], [])
    )
  );

export const selectRevenueData: MemoizedSelector<IState, IChartDatasetProperties[]> = createSelector(
  selectCompanies,
  companies =>
    companies.map(({ name, statistics }) =>
      ({
        label: name,
        data: statistics.map(statistic => statistic.revenue)
      })
    )
  );

export const selectInstallationsData: MemoizedSelector<IState, IChartDatasetProperties[]> = createSelector(
  selectCompanies,
  companies =>
    companies.map(({ name, statistics }) =>
      ({
        label: name,
        data: statistics.map(statistic => statistic.installations)
      })
    )
  );

  export const selectRevenueSummary: MemoizedSelector<IState, number> = createSelector(
    selectCompanies,
    companies =>
      companies
        .map(({ statistics }) => statistics
          .map(({ revenue }) => revenue)
          .reduce((acc, value) => acc + value))
        .reduce((acc, value) => acc + value));

  export const selectInstallationsSummary: MemoizedSelector<IState, number> = createSelector(
    selectCompanies,
    companies =>
      companies
        .map(({ statistics }) => statistics
          .map(({ installations }) => installations)
          .reduce((acc, value) => acc + value))
        .reduce((acc, value) => acc + value));
