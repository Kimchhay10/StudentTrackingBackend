import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema } from 'src/class/schemas/class.model';
import { StudentSchema } from 'src/student/schemas/student.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'class', schema: ClassSchema }]),
    MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }]),
  ],
  providers: [ClassService],
  controllers: [ClassController],
})
export class ClassModule {}
