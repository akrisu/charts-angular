import { ICompany } from './company';

export interface ICompanyState {
  isFetching: boolean;
  data: ICompany[];
}
