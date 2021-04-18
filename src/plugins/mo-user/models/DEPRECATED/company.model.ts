import { ICompany } from '../../interfaces/DEPRECATED';

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

  public getSerialized(): ICompany {
    return {
      name: this._name,
      taxNumber: this._taxNumber
    };
  }
}
