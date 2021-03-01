import deepmerge from 'deepmerge';
import { isObject } from 'lodash';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { ProductTypeEnum, ProductUnitEnum } from '../enums';
import { DEFAULT_PRODUCT_DATA, IProductData, IPurchasedProductData } from '../interfaces';
import { IProductDataPublic } from '../interfaces/product-public.data';

export class ProductModel {
  protected _id: string;
  protected _name: string;
  protected _productType: ProductTypeEnum;
  protected _description: string;
  protected _createdAt: string;
  protected _createdBy: string;
  protected _startsOn: string;
  protected _endsOn: string;
  protected _minimumDurationDays: number;
  protected _unit: ProductUnitEnum;
  protected _pricePerUnit: number;
  protected _dependsOnProducts: string[];
  protected _boundToUser: string | null;
  protected _deleted: boolean;
  protected _icon: string;
  protected _requestsPerDay: number;
  protected _bgColor: string;
  protected _pricePerUnitYearlyDiscount: number;
  protected _bestValue: boolean;

  protected _initLogger: { type: string; error: any }[] = [];

  constructor(data: IProductData) {
    data = deepmerge(DEFAULT_PRODUCT_DATA, data);

    if (data && isObject(data)) {
      try {
        data = JSON.parse(JSON.stringify(data));
      } catch (err) {
        this._initLogger.push({
          type: 'ERROR',
          error: err
        });
        data = {} as any;
      }
    }

    this._id = data.id ?? uuidv4();
    this._name = data.name;
    this._productType = data.productType;
    this._description = data.description;
    this._createdAt = data.createdAt;
    this._createdBy = data.createdBy;
    this._startsOn = data.startsOn;
    this._endsOn = data.endsOn;
    this._minimumDurationDays = data.minimumDurationDays;
    this._unit = data.unit;
    this._pricePerUnit = data.pricePerUnit;
    this._dependsOnProducts = data.dependsOnProducts ?? [];
    this._boundToUser = data.boundToUser ?? null;
    this._deleted = data.deleted;
    this._icon = data.icon;
    this._requestsPerDay = data.requestsPerDay;
    this._bgColor = data.bgColor;
    this._pricePerUnitYearlyDiscount = data.pricePerUnitYearlyDiscount;
    this._bestValue = data.bestValue;

    // Checking data variable
    for (const key in data) {
      const value = (this as any)[`_${key}`];
      if (!value) {
        continue;
      }
      if (value === 'REQUIRED') {
        this._initLogger.push({
          type: 'WARN',
          error: `Product-Data parameter "${key}" is required!`
        });
        const createdValue = `AUTO_CREATED_NAME-${uuidv4()}`;
        (this as any)[`_${key}`] = createdValue;
        this._initLogger.push({
          type: 'WARN',
          error: `Auto created "${key}" [${createdValue}]`
        });
        continue;
      }
      if (value === 'AUTO_CREATED_UUID') {
        const createdValue = uuidv4();
        (this as any)[`_${key}`] = uuidv4();
        this._initLogger.push({
          type: 'WARN',
          error: `Auto created "${key}" [${createdValue}]`
        });
      }
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get productType(): ProductTypeEnum {
    return this._productType;
  }

  get description(): string {
    return this._description;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get createdBy(): string {
    return this._createdBy;
  }

  get startsOn(): string {
    return this._startsOn;
  }

  get endsOn(): string {
    return this._endsOn;
  }

  get minimumDurationDays(): number {
    return this._minimumDurationDays;
  }

  get unit(): ProductUnitEnum {
    return this._unit;
  }

  get pricePerUnit(): number {
    return this._pricePerUnit;
  }

  get dependsOnProducts(): string[] {
    return this._dependsOnProducts;
  }

  get boundToUser(): string | null {
    return this._boundToUser;
  }

  get deleted(): boolean {
    return this._deleted;
  }

  get icon(): string {
    return this._icon;
  }

  get requestsPerDay() {
    return this._requestsPerDay;
  }

  get bgColor() {
    return this._bgColor;
  }

  get pricePerUnitYearlyDiscount() {
    return this._pricePerUnitYearlyDiscount;
  }

  get bestValue() {
    return this._bestValue;
  }

  set name(value: string) {
    this._name = value;
  }

  set productType(value: ProductTypeEnum) {
    this._productType = value;
  }

  set description(value: string) {
    this._description = value;
  }

  set startsOn(value: string) {
    this._startsOn = value;
  }

  set endsOn(value: string) {
    this._endsOn = value;
  }

  set minimumDurationDays(value: number) {
    this._minimumDurationDays = value;
  }

  set unit(value: ProductUnitEnum) {
    this._unit = value;
  }

  set pricePerUnit(value: number) {
    this._pricePerUnit = value;
  }

  set dependsOnProducts(value: string[]) {
    this._dependsOnProducts = value;
  }

  set boundToUser(value: string | null) {
    this._boundToUser = value;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }

  set icon(value: string) {
    this._icon = value;
  }

  set requestsPerDay(value: number) {
    this._requestsPerDay = value;
  }

  set bgColor(value: string) {
    this._bgColor = value;
  }

  set pricePerUnitYearlyDiscount(value: number) {
    this._pricePerUnitYearlyDiscount = value;
  }

  set bestValue(value: boolean) {
    this._bestValue = value;
  }

  get initLogger(): { type: string; error: any }[] {
    return this._initLogger;
  }

  getSerialize(): IProductData {
    return {
      id: this._id,
      name: this._name,
      productType: this._productType,
      description: this._description,
      createdAt: this._createdAt,
      createdBy: this.createdBy,
      startsOn: this.startsOn,
      endsOn: this._endsOn,
      minimumDurationDays: this.minimumDurationDays,
      unit: this._unit,
      pricePerUnit: this._pricePerUnit,
      dependsOnProducts: this._dependsOnProducts,
      boundToUser: this._boundToUser,
      deleted: this._deleted,
      icon: this._icon,
      requestsPerDay: this._requestsPerDay,
      bgColor: this._bgColor,
      pricePerUnitYearlyDiscount: this._pricePerUnitYearlyDiscount,
      bestValue: this._bestValue
    };
  }

  serializePublic(): IProductDataPublic {
    return {
      id: this._id,
      name: this._name,
      productType: this._productType,
      description: this._description,
      startsOn: this._startsOn,
      endsOn: this._endsOn,
      minimumDurationDays: this._minimumDurationDays,
      unit: this._unit,
      pricePerUnit: this._pricePerUnit,
      dependsOnProducts: this._dependsOnProducts,
      icon: this._icon,
      requestsPerDay: this._requestsPerDay,
      bgColor: this._bgColor,
      pricePerUnitYearlyDiscount: this._pricePerUnitYearlyDiscount,
      bestValue: this._bestValue
    };
  }

  createSerializedPurchasedProduct(quantity: number): IPurchasedProductData {
    return {
      id: this._id,
      name: this._name,
      productType: this._productType,
      description: this._description,
      createdAt: this._createdAt,
      createdBy: this.createdBy,
      startsOn: this.startsOn,
      endsOn: this._endsOn,
      minimumDurationDays: this.minimumDurationDays,
      unit: this._unit,
      pricePerUnit: this._pricePerUnit,
      dependsOnProducts: this._dependsOnProducts,
      boundToUser: this._boundToUser,
      deleted: this._deleted,
      icon: this._icon,
      requestsPerDay: this._requestsPerDay,
      bgColor: this._bgColor,
      pricePerUnitYearlyDiscount: this._pricePerUnitYearlyDiscount,
      bestValue: this._bestValue,
      quantity: quantity,
      purchaseTimestamp: moment().format()
    };
  }
}
