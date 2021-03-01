import { MiscDataTypeEnum } from "../enums";

export interface IContactData {
  id: string;
  type: MiscDataTypeEnum,
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  subject: string;
  message: string;
  subscribeNewsletter: boolean;
  repliedOn?: string;
}
