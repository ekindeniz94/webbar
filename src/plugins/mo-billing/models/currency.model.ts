import { ICurrencyData } from '../interfaces';

export class CurrencyModel {
  protected _isoId: string;
  protected _display: string;

  constructor(data: ICurrencyData) {
    this._isoId = data.isoId;
    this._display = data.display;
  }

  public getSerialized(): ICurrencyData {
    return {
      isoId: this._isoId,
      display: this._display
    };
  }
}
