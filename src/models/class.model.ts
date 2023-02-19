import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ClassDocument = Class & Document;
export type StudentOfClassDocument = StudentOfClass & Document;

@Schema()
export class StudentOfClass {
  @Prop({})
  name: string;
  @Prop({})
  semester: string;
  @Prop({})
  branch: string;
  @Prop({})
  isPresent: boolean;
}

export const StudentOfClassSchema =
  SchemaFactory.createForClass(StudentOfClass);

@Schema()
export class Class {
  @Prop({ default: Date.now() })
  date: Date;
  @Prop()
  student: [StudentOfClass];
}

export const ClassSchema = SchemaFactory.createForClass(Class);
