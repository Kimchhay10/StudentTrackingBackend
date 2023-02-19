import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ default: Date.now() })
  date: Date;
  @Prop({})
  name: string;
  @Prop({})
  semester: string;
  @Prop({})
  branch: string;
  @Prop({})
  isPresent: boolean;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
