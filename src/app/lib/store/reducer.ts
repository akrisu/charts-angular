import { InjectionToken } from '@angular/core';
import { ActionReducerMap, combineReducers } from '@ngrx/store';

import { companyReducer } from '../company/reducer';
import { IState } from './state';

export const reducer: ActionReducerMap<IState> = {
  company: companyReducer,
};
