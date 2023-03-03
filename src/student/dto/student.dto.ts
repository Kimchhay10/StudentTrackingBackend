import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

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
  @IsBoolean()
  isPresent: boolean;
  @IsNotEmpty()
  @IsString()
  slugId: string;
}
