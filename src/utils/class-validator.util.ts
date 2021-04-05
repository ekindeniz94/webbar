import { classToPlain, plainToClass } from 'class-transformer';
import { isEmpty } from 'class-validator';

export const ValidateIfObjectNotEmpty = (obj: any, objectClass: any): boolean => {
  let result = false;
  const data = classToPlain(plainToClass(objectClass, obj, { excludeExtraneousValues: true }));
  for (const key in data) {
    if (!isEmpty(data[key])) {
      result = true;
      break;
    }
  }
  return result;
};
