import { IsNotEmpty, IsString } from 'class-validator';

export class StudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  semester: string;
  @IsNotEmpty()
  @IsString()
  branch: string;
  @IsNotEmpty()
  @IsString()
  isPresent: string;
  @IsNotEmpty()
  @IsString()
  slugId: string;
}
