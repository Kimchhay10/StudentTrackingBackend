import { IsNotEmpty } from 'class-validator';

export class ClassDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly semester: string;

  @IsNotEmpty()
  readonly branch: string;

  @IsNotEmpty()
  readonly isPresent: boolean;
}
