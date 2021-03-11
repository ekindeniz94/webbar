// INFO: THE LOWER CASE CONTENT IS IMPORTANT FOR STRIPE
// https://www.currency-iso.org/dam/downloads/lists/list_one.xml

export const DEFAULT_CURRENCY_DATA: ICurrencyData = {
  isoId: 'eur',
  display: '€'
};

export interface ICurrencyData {
  isoId: string; // eur, gbp, usd
  display: string;
}
