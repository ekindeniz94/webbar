import { ICompany } from '../interfaces';

export class CompanyModel {
  protected _name?: string;
  protected _taxNumber?: string;

  constructor(data?: ICompany) {
    this._name = data?.name;
    this._taxNumber = data?.taxNumber;
  }

  get name(): string | undefined {
    return this._name;
  }

  get taxNumber(): string | undefined {
    return this._taxNumber;
  }

  get serialize(): ICompany {
    return {
      name: this._name,
      taxNumber: this._taxNumber
    };
  }
}
