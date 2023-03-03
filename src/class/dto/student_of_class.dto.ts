import { IsNotEmpty } from 'class-validator';

export class StudentOfClassDto {
  readonly slugId: string;
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly semester: string;

  @IsNotEmpty()
  readonly branch: string;

  @IsNotEmpty()
  readonly isPresent: string;
}
