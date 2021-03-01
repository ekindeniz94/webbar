import { v4 as uuidv4 } from 'uuid';
import { IAddress, ICompany, IProfileData, IUserApiKeyData, IUserData, IUserOneTimeKeyData } from '../interfaces';
import { AddressModel } from './address.model';
import { CompanyModel } from './company.model';
import { UserApiKeyModel } from './user-api-key.model';
import { UserOneTimeKeyModel } from './user-one-time-key.model';
import { IPurchasedProductData, PurchasedProductModel } from '../../mo-product';

export class UserModel {
  protected _id: string;
  protected _email: string;
  protected _passwordHash: string;
  protected _apiKeys: UserApiKeyModel[];
  protected _oneTimeKeys: UserOneTimeKeyModel[];
  protected _products: PurchasedProductModel[];
  protected _firstName?: string;
  protected _lastName?: string;
  protected _company?: CompanyModel;
  protected _address?: AddressModel;
  protected _billingAddress?: AddressModel;
  protected _billingAddressEqualsAddress?: boolean;
  protected _phoneNumber?: string;

  constructor(data: IUserData) {
    this._id = data.id ?? uuidv4();
    this._email = data.email;
    this._passwordHash = data.passwordHash;
    this._apiKeys = data.apiKeys ? data.apiKeys.map((item: IUserApiKeyData) => new UserApiKeyModel(item)) : [];
    this._oneTimeKeys = data.oneTimeKeys
      ? data.oneTimeKeys.map((item: IUserOneTimeKeyData) => new UserOneTimeKeyModel(item))
      : [];
    this._products = data.products
      ? data.products.map((item: IPurchasedProductData) => new PurchasedProductModel(item))
      : [];
    this._firstName = data?.firstName;
    this._lastName = data?.lastName;
    this._company = data?.company ? new CompanyModel(data.company) : undefined;
    this._address = data?.address ? new AddressModel(data.address) : undefined;
    this._billingAddress = data?.billingAddress ? new AddressModel(data.billingAddress) : undefined;
    this._billingAddressEqualsAddress = data?.billingAddressEqualsAddress;
    this._phoneNumber = data?.phoneNumber;
  }

  public deleteApiKey(id: string): void {
    this._apiKeys = this._apiKeys.filter((item: UserApiKeyModel) => item.id !== id);
  }

  public addApiKey(item: UserApiKeyModel): UserApiKeyModel {
    this._apiKeys.push(item);
    return item;
  }

  public filterExpiredApiKeys(): void {
    this._apiKeys = this._apiKeys.filter((item: UserApiKeyModel) => !item.isExpired);
  }

  public deleteOneTimeKey(key: string): void {
    this._oneTimeKeys = this._oneTimeKeys.filter((item: UserOneTimeKeyModel) => item.key !== key);
  }

  public addOneTimeKey(item: UserOneTimeKeyModel): UserOneTimeKeyModel {
    this._oneTimeKeys.push(item);
    return item;
  }

  public filterExpiredOneTimeKeys(): void {
    this._oneTimeKeys = this._oneTimeKeys.filter((item: UserOneTimeKeyModel) => !item.isExpired);
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get passwordHash(): string {
    return this._passwordHash;
  }

  set id(value: string) {
    this._id = value;
  }

  set passwordHash(value: string) {
    this._passwordHash = value;
  }

  get apiKeys(): UserApiKeyModel[] {
    return this._apiKeys;
  }

  get oneTimeKeys(): UserOneTimeKeyModel[] {
    return this._oneTimeKeys;
  }

  get products(): IPurchasedProductData[] {
    return this._products.map((item: PurchasedProductModel) => item.serialize);
  }

  set addProducts(products: IPurchasedProductData[]) {
    for (let aProduct of products) {
      this._products.push(new PurchasedProductModel(aProduct));
    }
  }

  get serialize(): IUserData {
    return {
      id: this._id,
      email: this._email,
      passwordHash: this._passwordHash,
      apiKeys: this._apiKeys.map((item: UserApiKeyModel) => item.serialize),
      oneTimeKeys: this._oneTimeKeys.map((item: UserOneTimeKeyModel) => item.serialize),
      products: this._products.map((item: PurchasedProductModel) => item.serialize),
      firstName: this._firstName,
      lastName: this._lastName,
      company: this._company?.serialize,
      address: this._address?.serialize,
      billingAddress: this._billingAddress?.serialize,
      billingAddressEqualsAddress: this._billingAddressEqualsAddress,
      phoneNumber: this._phoneNumber
    };
  }

  get profileData(): IProfileData {
    return {
      id: this._id,
      email: this._email,
      apiKeys: this._apiKeys.map((item: UserApiKeyModel) => item.serialize),
      oneTimeKeys: this._oneTimeKeys.map((item: UserOneTimeKeyModel) => item.serialize)
    };
  }

  get firstName(): string | undefined {
    return this._firstName;
  }

  get lastName(): string | undefined {
    return this._lastName;
  }

  get company(): ICompany | undefined {
    return this._company?.serialize;
  }

  get address(): IAddress | undefined {
    return this._address?.serialize;
  }

  get billingAddress(): IAddress | undefined {
    return this._billingAddress?.serialize;
  }

  get billingAddressEqualsAddress(): boolean | undefined {
    return this._billingAddressEqualsAddress;
  }

  get phoneNumber(): string | undefined {
    return this._phoneNumber;
  }

  set firstName(value: string | undefined) {
    this._firstName = value;
  }

  set lastName(value: string | undefined) {
    this._lastName = value;
  }

  set company(value: ICompany | undefined) {
    this._company = new CompanyModel(value);
  }

  set address(value: IAddress | undefined) {
    this._address = new AddressModel(value);
  }

  set billingAddress(value: IAddress | undefined) {
    this._billingAddress = new AddressModel(value);
  }

  set billingAddressEqualsAddress(value: boolean | undefined) {
    this._billingAddressEqualsAddress = value;
  }

  set phoneNumber(value: string | undefined) {
    this._phoneNumber = value;
  }
}
