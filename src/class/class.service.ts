import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassDto } from 'src/dto/class.dto';
import { StudentOfClassDto } from 'src/dto/student_of_class.dto';
import { ClassDocument } from 'src/models/class.model';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel('class') private readonly classModel: Model<ClassDocument>,
  ) {}

  async createClass(classDto: ClassDto): Promise<ClassDto> {
    const newClass = new this.classModel(classDto);
    return newClass.save();
  }
  async createStudentOfClass(id: string, studentOfClass: StudentOfClassDto) {
    const data = await this.classModel.findById({ _id: id });
    const newData = data.student.concat(studentOfClass);
    return this.classModel.updateMany(
      { _id: id },
      { $set: { student: newData } },
    );
  }
  async getClass() {
    return this.classModel
      .find({})
      .then((student) => {
        console.log(student);
        return student;
      })
      .catch((err) => console.log(err));
  }
  async getClassById(id: string) {
    return this.classModel.findById(id);
  }
}
