import { PartialType } from '@nestjs/mapped-types';
import { Class } from '../schemas/class.model';

export class FilterClassDto extends PartialType(Class) {}
