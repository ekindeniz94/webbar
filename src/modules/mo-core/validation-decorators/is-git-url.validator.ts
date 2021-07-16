import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';

export const isGitUrl = (value: string) => {
  const regex = /(?:git|ssh|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/;
  return regex.test(`${value}`);
};

@ValidatorConstraint({ name: 'isInStringList', async: false })
export class IsGitUrlConstraint implements ValidatorConstraintInterface {
  public validate(value: string, args: ValidationArguments) {
    return isGitUrl(value);
  }

  public defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `$property domain must match one of ${relatedPropertyName}!`;
  }
}

export function IsGitUrl(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isInStringList',
      target: object.constructor,
      propertyName: propertyName,
      // constraints: [stringList],
      options: validationOptions,
      validator: IsGitUrlConstraint
    });
  };
}
