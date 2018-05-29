import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FetchCompanyData } from '../lib/company/action';
import { IState } from '../lib/store/state';

@Component({
  selector: 'app-dashboard',
  template: '<app-chart-panel></app-chart-panel>'
})
export class DashboardComponent implements OnInit {
  constructor(
    private store$: Store<IState>,
  ) { }

  ngOnInit() {
    this.store$.dispatch(new FetchCompanyData());
  }
}
