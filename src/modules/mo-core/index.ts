import { MoUtils } from '@mo/js-utils';

export * from './address';
export * from './constantes';
export * from './country';
export * from './data-transfer-objects';
export * from './enums';
export * from './validation-decorators';

export const generateCorrelationId = (): string => {
  return `mo_${MoUtils.nanoid()}`;
};
