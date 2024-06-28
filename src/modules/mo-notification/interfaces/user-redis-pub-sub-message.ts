// import { UserSocketDataEventEnum, UserSocketEventEnum } from '../enums';
// import { IRedisPubSubMessageDeprecated } from './redis-pub-sub-message';
// import { RedisPubSubMessageDataTypes } from '../types';
//
// /*********************************************
//  * USER
//  *********************************************/
//
// /**
//  * Hint: data type is UserSocketDataEventEnum
//  */
// export interface IRedisPubSubMessageUser extends IRedisPubSubMessageDeprecated {
//   redisChannel: 'mo_user';
//   socketEvent: UserSocketEventEnum.USER_SERVICE;
//   data: RedisPubSubMessageDataTypes<UserSocketDataEventEnum>[];
// }
//
// /**
//  * Hint: data type is UserSocketDataEventEnum
//  */
// export interface IRedisPubSubMessageAuth extends IRedisPubSubMessageDeprecated {
//   redisChannel: 'mo_user';
//   socketEvent: UserSocketEventEnum.AUTH_SERVICE;
//   data: RedisPubSubMessageDataTypes<UserSocketDataEventEnum>[];
// }
//
