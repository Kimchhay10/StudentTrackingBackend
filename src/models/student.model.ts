import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;
@Schema()
export class Student {
  @Prop()
  username: string;
  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;
  @Prop({ default: '0' })
  age: string;
  @Prop({ default: '0' })
  attendance: string;
  @Prop({ default: '0' })
  engagement: string;
  @Prop({ default: 'Good' })
  condition: string;
  @Prop({ default: Date.now() })
  date_added: Date;
  @Prop({ default: 'student' })
  role: string;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
