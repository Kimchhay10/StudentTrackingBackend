import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class StudentOfClassDto {
  _id: ObjectId;
  @IsString()
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
