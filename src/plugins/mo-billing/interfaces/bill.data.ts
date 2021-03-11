import moment from 'moment';
import { BillTypeEnum } from '../enums/bill-type.enum';
import { IBillEntryData } from './bill-entry.data';
import { DEFAULT_CURRENCY_DATA, ICurrencyData } from './currency.data';

export const DEFAULT_BILL_DATA: IBillData = {
  id: '',
  type: BillTypeEnum.INVOICE,
  billNo: '',
  createdAt: moment().format(),
  updateAt: moment().format(),
  deliveredAt: moment().format(),
  userId: '',
  entries: [],
  currency: DEFAULT_CURRENCY_DATA
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
  currency: ICurrencyData;
}
