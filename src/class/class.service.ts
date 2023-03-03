import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassDto } from 'src/class/dto/class.dto';
import { StudentOfClassDto } from 'src/class/dto/student_of_class.dto';
import { Class, ClassDocument } from 'src/class/schemas/class.model';
import slugify from 'slugify';
@Injectable()
export class ClassService {
  constructor(
    @InjectModel('class') private readonly classModel: Model<ClassDocument>,
  ) {}

  async createClass(classDto: ClassDto): Promise<Class> {
    const payload = {
      room: classDto.room,
      student: [],
    };
    const newClass = new this.classModel(payload);
    return newClass.save();
  }
  async createStudentOfClass(id, studentOfClass: StudentOfClassDto) {
    const slugId = slugify(studentOfClass.name, {
      lower: true,
      trim: true,
      strict: true,
    });
    const data = await this.classModel.findById({ _id: id });
    const payloadForStudent = {
      slugId,
      ...studentOfClass,
    };
    const new_data = data.student.concat(payloadForStudent);
    console.log(new_data);
    return this.classModel.updateMany(
      { _id: id },
      { $set: { student: new_data } },
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
