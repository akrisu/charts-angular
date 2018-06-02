import { Company, ICompany } from './company';

export const jsonCompany = {
  name: 'Unit',
  data: [
    {
      week: 50,
      revenue: 10,
      installations: 10,
    }
  ],
};

describe('company', () => {
  it('should map single element into company', () => {
    const json = jsonCompany;

    const company = Company.mapOne(json);

    const expectedCompany: ICompany = {
      name: 'Unit',
      statistics: [{
        week: 50,
        revenue: 10,
        installations: 10,
      }],
    };

    expect(company).toEqual(expectedCompany);
  });

  it('should map array of json elements into array of companies', () => {
    const json = [jsonCompany];

    const company = Company.mapArray(json);

    const expectedCompanies: ICompany[] = [{
        name: 'Unit',
        statistics: [{
          week: 50,
          revenue: 10,
          installations: 10,
        }],
    }];
  });
});
