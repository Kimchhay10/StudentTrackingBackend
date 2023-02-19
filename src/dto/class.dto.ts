import { IsArray, IsNotEmpty } from 'class-validator';
import { StudentOfClassDto } from './student_of_class.dto';

export class ClassDto {
  @IsNotEmpty()
  @IsArray()
  readonly student: StudentOfClassDto[];
}
