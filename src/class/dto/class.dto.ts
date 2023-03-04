import { IsNotEmpty, IsString } from 'class-validator';
import { StudentOfClassDto } from './student_of_class.dto';

export class ClassDto {
  @IsNotEmpty()
  @IsString()
  readonly room: string;
  readonly student: StudentOfClassDto[];
}
