import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import * as semver from 'semver';

export const isSemanticVersion = (value: string): boolean => {
  return !!semver.valid(value);
};

@ValidatorConstraint({ name: 'isSemanticVersion', async: false })
export class IsSemanticVersionConstraint implements ValidatorConstraintInterface {
  public validate(value: string, args: ValidationArguments) {
    return isSemanticVersion(value);
  }

  public defaultMessage(args: ValidationArguments) {
    return `$property must be a semantic version syntax!`;
  }
}

export function IsSemanticVersion(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isSemanticVersion',
      target: object.constructor,
      propertyName: propertyName,
      // constraints: [stringList],
      options: validationOptions,
      validator: IsSemanticVersionConstraint
    });
  };
}
