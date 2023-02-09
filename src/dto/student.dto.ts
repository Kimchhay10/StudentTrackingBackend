import { IsEmail, IsNotEmpty } from 'class-validator';

export class StudenDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  readonly username: string;

  readonly age: string;

  readonly attendance: string;

  readonly engagement: string;

  readonly condition: string;
}
