import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function IsInStringList(stringList: string[], validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isInStringList',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [stringList],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const stringList: string[] = args.constraints[0];
          return !!stringList.find((item: string) => item === `${value}`);
        }
      }
    });
  };
}
