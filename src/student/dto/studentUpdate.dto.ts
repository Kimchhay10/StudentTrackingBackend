import { PartialType } from '@nestjs/mapped-types';
import { Student } from '../schemas/student.model';

export class StudentUpdateDto extends PartialType(Student) {}
