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
