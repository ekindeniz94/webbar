import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';

export class MiscData {
  id: string;
  type: MiscDataTypeEnum;

  constructor(type: MiscDataTypeEnum, id?: string) {
    this.id = id ?? uuidv4();
    this.type = type;
  }
}
