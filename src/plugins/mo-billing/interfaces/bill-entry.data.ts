import { TaxEnum } from "../enums/tax.enum";

export interface IBillEntryData {
    name: string;
    description: string;
    quantity: number;
    pricePerQuantityInCent: number;
    tax: TaxEnum; 
}