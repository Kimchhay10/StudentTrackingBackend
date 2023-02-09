import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({ default: 'student' })
  authRole: string;
  @Prop({ required: true })
  username: string;
  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;
  @Prop({ required: true })
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
