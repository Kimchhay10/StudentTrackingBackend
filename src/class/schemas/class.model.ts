/* eslint-disable @typescript-eslint/no-var-requires */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Student, StudentSchema } from 'src/student/schemas/student.model';

export type ClassDocument = Class & Document;

@Schema()
export class Class {
  _id: ObjectId;
  @Prop({})
  room: string;
  @Prop({ default: Date.now() })
  date: Date;
  @Prop({ type: [StudentSchema], isRequired: false })
  student: Student[];
}

export const ClassSchema = SchemaFactory.createForClass(Class);
