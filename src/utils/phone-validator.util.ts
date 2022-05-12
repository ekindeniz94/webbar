import { instanceToPlain, plainToInstance } from 'class-transformer';
import { isEmpty, isString } from 'class-validator';
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

export const phoneValidate = (phoneNumber: string): boolean => {
  if (isString(phoneNumber)) {
    const key = Object.keys(customValidator).find((item: string) => phoneNumber.startsWith(item));
    if (key) {
      return customValidator[key](`${phoneNumber}`);
    } else {
      return phone(`${phoneNumber}`, { strictDetection: true }).isValid;
    }
  }
  return false;
};
