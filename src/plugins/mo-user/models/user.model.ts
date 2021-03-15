import { v4 as uuidv4 } from 'uuid';
import { IPurchasedProductData, PurchasedProductModel } from '../../mo-product';
import {
  IAddress,
  ICompany,
  IProfileData,
  IPublicUserData,
  IUserApiKeyData,
  IUserData,
  IUserOneTimeKeyData
} from '../interfaces';
import { IAdminUserData } from '../interfaces/admin-user.data';
import { AddressModel } from './address.model';
import { CompanyModel } from './company.model';
import { UserApiKeyModel } from './user-api-key.model';
import { UserOneTimeKeyModel } from './user-one-time-key.model';

export class UserModel {
  protected _id: string;
  protected _email: string;
  protected _createdAt: string;
  protected _passwordHash: string;
  protected _apiKeys: UserApiKeyModel[];
  protected _oneTimeKeys: UserOneTimeKeyModel[];
  protected _products: PurchasedProductModel[];
  protected _firstName?: string | undefined;
  protected _lastName?: string | undefined;
  protected _company?: CompanyModel | undefined;
  protected _address?: AddressModel | undefined;
  protected _billingAddress?: AddressModel | undefined;
  protected _billingAddressEqualsAddress: boolean = true;
  protected _phoneNumber?: string | undefined;
  protected _phoneNumberValidatedAt?: string | undefined;
  protected _emailValidatedAt?: string | undefined;
  

  constructor(data: IUserData) {
    this._id = data.id ?? uuidv4();
    this._email = data.email;
    this._createdAt = data.createdAt;
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
    this._billingAddressEqualsAddress =
      data?.billingAddressEqualsAddress === false || data?.billingAddressEqualsAddress === true
        ? data.billingAddressEqualsAddress
        : true;
    this._phoneNumber = data?.phoneNumber;
    this._emailValidatedAt = data?.emailValidatedAt;
    this._phoneNumberValidatedAt = data?.phoneNumberValidatedAt;
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

  public getSerialized(): IUserData {
    return {
      id: this._id,
      email: this._email,
      passwordHash: this._passwordHash,
      apiKeys: this._apiKeys.map((item: UserApiKeyModel) => item.getSerialized()),
      oneTimeKeys: this._oneTimeKeys.map((item: UserOneTimeKeyModel) => item.getSerialized()),
      products: this._products.map((item: PurchasedProductModel) => item.getSerialized()),
      firstName: this._firstName,
      lastName: this._lastName,
      company: this._company?.getSerialized(),
      address: this._address?.getSerialized(),
      billingAddress: this._billingAddress?.getSerialized(),
      billingAddressEqualsAddress: this._billingAddressEqualsAddress,
      phoneNumber: this._phoneNumber,
      phoneNumberValidatedAt: this._phoneNumberValidatedAt,
      emailValidatedAt: this._emailValidatedAt,
      createdAt: this._createdAt
    };
  }

  public getPublicSerialized(): IPublicUserData {
    return {
      firstName: this._firstName!,
      lastName: this._lastName!
    };
  }

  public getAdimSerialized(): IAdminUserData {
    return {
      id: this._id,
      email: this._email,
      firstName: this._firstName,
      lastName: this._lastName,
      company: this._company?.getSerialized(),
      address: this._address?.getSerialized(),
      billingAddress: this._billingAddress?.getSerialized(),
      billingAddressEqualsAddress: this._billingAddressEqualsAddress,
      phoneNumber: this._phoneNumber,
      phoneNumberValidatedAt: this._phoneNumberValidatedAt,
      emailValidatedAt: this._emailValidatedAt,
      createdAt: this._createdAt
    };
  }

  get profileData(): IProfileData {
    return {
      id: this._id,
      email: this._email,
      apiKeys: this._apiKeys.map((item: UserApiKeyModel) => item.getSerialized()),
      oneTimeKeys: this._oneTimeKeys.map((item: UserOneTimeKeyModel) => item.getSerialized())
    };
  }

  get toStringName(): string {
    if ((this._firstName && this._firstName.length > 0) || (this._lastName && this._lastName?.length > 0)) {
      return [`${this._firstName}`, `${this._lastName}`].filter((item: string) => item).join(' ');
    }
    return this._email ?? this._id;
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
    return this._products.map((item: PurchasedProductModel) => item.getSerialized());
  }

  set addProducts(products: IPurchasedProductData[]) {
    for (let aProduct of products) {
      this._products.push(new PurchasedProductModel(aProduct));
    }
  }

  get firstName(): string | undefined {
    return this._firstName;
  }

  set firstName(value: string | undefined) {
    this._firstName = value;
  }

  get lastName(): string | undefined {
    return this._lastName;
  }

  set lastName(value: string | undefined) {
    this._lastName = value;
  }

  get company(): ICompany | undefined {
    return this._company?.getSerialized();
  }

  set company(value: ICompany | undefined) {
    this._company = new CompanyModel(value);
  }

  get address(): IAddress | undefined {
    return this._address?.getSerialized();
  }

  set address(value: IAddress | undefined) {
    this._address = new AddressModel(value);
  }

  get billingAddress(): IAddress | undefined {
    return this._billingAddress?.getSerialized();
  }

  set billingAddress(value: IAddress | undefined) {
    this._billingAddress = new AddressModel(value);
  }

  get billingAddressEqualsAddress(): boolean {
    return this._billingAddressEqualsAddress;
  }

  set billingAddressEqualsAddress(value: boolean) {
    this._billingAddressEqualsAddress = value;
  }

  get phoneNumber(): string | undefined {
    return this._phoneNumber;
  }

  set phoneNumber(value: string | undefined) {
    this._phoneNumber = value;
  }

  get phoneNumberValidatedAt(): string | undefined {
    return this._phoneNumberValidatedAt;
  }

  set phoneNumberValidatedAt(value: string | undefined) {
    this._phoneNumberValidatedAt = value;
  }

  get emailValidatedAt(): string | undefined {
    return this._emailValidatedAt;
  }

  set emailValidatedAt(value: string | undefined) {
    this._emailValidatedAt = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }
}
