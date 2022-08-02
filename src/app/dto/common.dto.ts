export interface SelectOptionDto {
  value: string;
  viewValue: string;
}

export interface FilterDto {
  type: FilterTypeEnum;
}

export enum FilterTypeEnum {
  topDokme = 'topDokme',
  lastSiktir = 'lastSiktir',
  newDokme = 'newDokme',
}

export class FilterType {
  asList: SelectOptionDto[];
  asObject: object;
  constructor() {
    this.asList = [
      { value: FilterTypeEnum.lastSiktir, viewValue: 'Last Siktir' },
      { value: FilterTypeEnum.newDokme, viewValue: 'New Dokme' },
      { value: FilterTypeEnum.topDokme, viewValue: 'Top Dokme' },
    ];
    this.asObject = { ...this.asList };
  }
}
