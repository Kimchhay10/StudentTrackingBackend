import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema } from 'src/models/class.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'class', schema: ClassSchema }]),
  ],
  providers: [ClassService],
  controllers: [ClassController],
})
export class ClassModule {}
