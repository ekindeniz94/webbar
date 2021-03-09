import { MiscDataTypeEnum } from '../enums';
import { IContactData } from '../interfaces';
import { MiscDataModel } from './misc-data.model';

export class ContactModel extends MiscDataModel {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  subject: string;
  message: string;
  subscribeNewsletter: boolean;
  repliedOn?: string;

  constructor(data: IContactData) {
    super(MiscDataTypeEnum.CONTACT, data.id);

    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.interest = data.interest;
    this.subject = data.subject;
    this.message = data.message;
    this.subscribeNewsletter = data.subscribeNewsletter;
    this.repliedOn = data.repliedOn;
  }

  public getSerialized(): IContactData {
    return {
      id: this.id,
      type: this.type,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      interest: this.interest,
      subject: this.subject,
      message: this.message,
      subscribeNewsletter: this.subscribeNewsletter,
      repliedOn: this.repliedOn
    };
  }
}
