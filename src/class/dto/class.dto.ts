import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { StudentOfClassDto } from './student_of_class.dto';

export class ClassDto {
  @IsNotEmpty()
  @IsString()
  readonly room: string;
  @IsNotEmpty()
  @IsArray()
  readonly student: StudentOfClassDto[];
}
