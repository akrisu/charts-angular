import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompany, Company } from './company';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CompanyService {
  constructor(
    private http: HttpClient,
  ) { }

  public fetch(): Observable<ICompany[]> {
    return this.http.get('./assets/company-mock.json')
      .pipe(
        map((data: any) => data.companies),
        map(Company.mapArray),
      );
  }
}
