import { Expose, Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';

export abstract class K8sMessageResponseBaseDto<T = any> {
  @Expose()
  @IsEnum(['success', 'error'])
  status: 'success' | 'error';

  @Expose()
  @IsOptional()
  @IsString()
  message?: string;

  @Expose()
  @ValidateNested()
  @IsOptional()
  abstract data?: T;

  @Expose()
  @Type(() => Date)
  timestamp: Date = new Date();

  // Helper methods
  isSuccess(): boolean {
    return this.status === 'success';
  }

  isError(): boolean {
    return this.status === 'error';
  }


  // Static factory methods
  static success<T>(data?: T, message?: string): K8sMessageResponseBaseDto<T> {
    const response = new (class extends K8sMessageResponseBaseDto<T> {
      data?: T = data;
    })();
    response.status = 'success';
    response.message = message;
    return response;
  }

  static error<T>(message: string, data?: T): K8sMessageResponseBaseDto<T> {
    const response = new (class extends K8sMessageResponseBaseDto<T> {
      data?: T = data;
    })();
    response.status = 'error';
    response.message = message;
    return response;
  }
}