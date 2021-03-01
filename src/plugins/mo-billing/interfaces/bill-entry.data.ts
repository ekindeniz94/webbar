import { TaxEnum } from "../enums/tax.enum";

export interface IBillEntryData {
    quantity: number;
    pricePerQuantityInCent: number;
    tax: TaxEnum; 
}