import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  _id: ObjectId;
  @Prop()
  name: string;
  @Prop()
  semester: string;
  @Prop()
  branch: string;
  @Prop()
  isPresent: string;
  @Prop()
  slugId: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
