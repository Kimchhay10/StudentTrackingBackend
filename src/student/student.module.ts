import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from 'src/student/schemas/student.model';
import { StudentService } from './student.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }]),
  ],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
