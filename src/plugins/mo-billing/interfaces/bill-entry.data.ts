export const DEFAULT_BILL_ENTRY_DATA: IBillEntryData = {
  name: 'Produkt',
  description: 'Produktbeschreibung',
  quantity: 1,
  pricePerQuantityInCent: 999,
  taxPercent: 19
};

export interface IBillEntryData {
  name: string;
  description: string;
  quantity: number;
  pricePerQuantityInCent: number;
  taxPercent: number;
}
