import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class RedisPubSubMessageDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  toUserId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  redisChannel: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  socketEvent: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  data: string;
}
