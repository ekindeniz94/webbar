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

  get initLogger(): { type: string; error: any }[] {
    return this._initLogger;
  }

  public getSerialized(): IProductData {
    return {
      id: this._id,
      name: this._name,
      productType: this._productType,
      description: this._description,
      createdAt: this._createdAt,
      createdBy: this._createdBy,
      startsOn: this._startsOn,
      endsOn: this._endsOn,
      minimumDurationDays: this._minimumDurationDays,
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

  public getSerializedPublic(): IProductDataPublic {
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

  public getSerializedPurchasedProduct(quantity: number, yearly: boolean = true): IPurchasedProductData {
    return {
      id: this._id,
      name: this._name,
      productType: this._productType,
      description: this._description,
      createdAt: this._createdAt,
      createdBy: this._createdBy,
      startsOn: this._startsOn,
      endsOn: this._endsOn,
      minimumDurationDays: this._minimumDurationDays,
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
      purchaseTimestamp: moment().format(),
      quantity: quantity,
      yearly: yearly
    };
  }
}
