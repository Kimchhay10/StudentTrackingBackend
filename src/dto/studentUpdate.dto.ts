import { IsString } from 'class-validator';

export class StudentUpdateDto {
  readonly username: string;

  readonly age: string;

  readonly attendance: string;

  readonly engagement: string;

  readonly condition: string;

  @IsString()
  readonly role: string = 'student' || 'teacher' || 'admin';
}
