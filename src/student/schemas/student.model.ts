import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({})
  name: string;
  @Prop({})
  semester: string;
  @Prop({})
  branch: string;
  @Prop({})
  isPresent: string;
  @Prop({ unique: true })
  slugId: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
