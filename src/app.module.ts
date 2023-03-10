import { StudentSchema } from './student/schemas/student.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ClassModule } from './class/class.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mongo:fDap1BWMQBbV1WSn@cluster0.atovgjy.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }]),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    StudentModule,
    AuthModule,
    ClassModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
