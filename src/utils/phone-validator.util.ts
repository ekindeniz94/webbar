import { instanceToPlain, plainToInstance } from 'class-transformer';
import { isEmpty } from 'class-validator';
import phone from 'phone';

const bosniaHerzegovina = (phoneNumber: string): boolean => {
  if (phoneNumber.startsWith('+387')) {
    phoneNumber = phoneNumber.substring(4);
    if (phoneNumber.length >= 8 && phoneNumber.length <= 9) {
      return true;
    }
  }

  return false;
};

const customValidator: { [key: string]: Function } = {
  '+387': bosniaHerzegovina
};

export const phoneValidate = (phoneNumberPrefix: string, phoneNumber: string): boolean => {
  if (phoneNumberPrefix && phoneNumber) {
    if (customValidator[phoneNumberPrefix]) {
      if (!phoneNumberPrefix.startsWith('+')) {
        phoneNumberPrefix = `+${phoneNumberPrefix}`;
      }
      return customValidator[phoneNumberPrefix](`${phoneNumberPrefix}${phoneNumber}`);
    } else {
      return phone(`${phoneNumberPrefix}${phoneNumber}`, { strictDetection: true }).isValid;
    }
  }
  return false;
};
