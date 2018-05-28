import { combineReducers } from '@ngrx/store';

import { companyReducer } from '../company/reducer';

export const reducer = combineReducers({ company: companyReducer });
