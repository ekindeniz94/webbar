export enum BitbucketTokenAccessTypeEnum {
  APP_PASSWORD = 'APP_PASSWORD',
  WORKSPACE_ACCESS_TOKEN = 'WORKSPACE_ACCESS_TOKEN',
  PROJECT_ACCESS_TOKEN = 'PROJECT_ACCESS_TOKEN'
}

export const ALL_BitbucketTokenAccessTypeEnum: BitbucketTokenAccessTypeEnum[] = [
  //
  BitbucketTokenAccessTypeEnum.APP_PASSWORD,
  BitbucketTokenAccessTypeEnum.WORKSPACE_ACCESS_TOKEN,
  BitbucketTokenAccessTypeEnum.PROJECT_ACCESS_TOKEN
];
