import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isEmpty, reverse } from 'ramda';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { FetchCompanyData } from '../lib/company/action';
import {
  selectChartLabels,
  selectInstallationsData,
  selectInstallationsSummary,
  selectRevenueData,
  selectRevenueSummary,
} from '../lib/company/selector';
import { IState } from '../lib/store/state';
import { createChartDataset, IChartDataset } from '../ui/chart/chart-dataset';
import { ChartType } from '../ui/chart/chart-type.enum';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public readonly revenueDataset$: Observable<IChartDataset[]> = this.store$.select(selectRevenueData)
    .pipe(
      filter(data => !isEmpty(data)),
      map(data => data.map(createChartDataset(ChartType.Line)))
    );

  public readonly installationsDataset$: Observable<IChartDataset[]> = this.store$.select(selectInstallationsData)
    .pipe(
      filter(data => !isEmpty(data)),
      map(data => data.map(createChartDataset(ChartType.Bar))),
      map(reverse),
    );

  public readonly revenueSummary$: Observable<number> = this.store$.select(selectRevenueSummary);

  public readonly installationsSummary$: Observable<number> = this.store$.select(selectInstallationsSummary);

  public readonly chartLabels$: Observable<string[]> = this.store$.select(selectChartLabels)
    .pipe(
      map(labels => labels.map(label => `Week ${label}`))
    );

  public readonly ChartType = ChartType;

  constructor(
    private store$: Store<IState>,
  ) { }

  ngOnInit() {
    this.store$.dispatch(new FetchCompanyData());
  }
}
