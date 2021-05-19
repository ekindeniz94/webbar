import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({ name: 'isInStringList', async: false })
export class IsInStringListConstraint implements ValidatorConstraintInterface {
  public validate(value: string, args: ValidationArguments) {
    const stringList: string[] = args.constraints[0];
    return !!stringList.find((item: string) => item === `${value}`);
  }

  public defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `$property domain must match one of ${relatedPropertyName}!`;
  }
}

export function IsInStringList(stringList: string[], validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isInStringList',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [stringList],
      options: validationOptions,
      validator: IsInStringListConstraint
    });
  };
}
