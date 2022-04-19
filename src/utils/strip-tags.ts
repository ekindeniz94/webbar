import { Transform } from 'class-transformer';
import { StateMachineOptions } from 'striptags/dist/es6/states';
import { isArray, isString } from 'class-validator';
import { striptags } from 'striptags';

export function StripTags(options?: StateMachineOptions): PropertyDecorator {
  return Transform(({ value }) => {
    try {
      if (isArray(value)) {
        return value.map((item: string) => {
          try {
            if (isString(item)) {
              item = striptags(item, options);
              return item;
            }
          } catch (e) {}
          return item;
        });
      }
      if (isString(value)) {
        value = striptags(value, options);
        return value;
      }
    } catch (e) {}
    return value;
  });
}
