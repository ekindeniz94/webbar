import { IAddress } from '../interfaces';

export class AddressModel {
  protected _street?: string;
  protected _zip?: string;
  protected _city?: string;
  protected _country?: string;

  constructor(data?: IAddress) {
    this._street = data?.street;
    this._zip = data?.zip;
    this._city = data?.city;
    this._country = data?.country;
  }

  get street(): string | undefined {
    return this._street;
  }

  get zip(): string | undefined {
    return this._zip;
  }

  get city(): string | undefined {
    return this._city;
  }

  get country(): string | undefined {
    return this._country;
  }

  get serialize(): IAddress {
    return {
      street: this._street,
      zip: this._zip,
      city: this._city,
      country: this._country
    };
  }
}
