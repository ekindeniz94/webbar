import moment from 'moment';
import { BillTypeEnum } from '../enums/bill-type.enum';
import { CurrencyEnum } from '../enums/currency.enum';
import { IBillEntryData } from './bill-entry.data';

export const DEFAULT_BILL_DATA: IBillData = {
  id: '',
  type: BillTypeEnum.INVOICE,
  billNo: '',
  createdAt: moment().format(),
  updateAt: moment().format(),
  deliveredAt: moment().format(),
  userId: '',
  entries: [],
  currency: CurrencyEnum.EUR
};

export interface IBillData {
  id: string;
  type: BillTypeEnum;
  billNo: string;
  createdAt: string;
  updateAt: string;
  deliveredAt: string;
  userId: string;
  entries: IBillEntryData[];
  currency: CurrencyEnum;
}
