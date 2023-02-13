import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDto } from 'src/dto/student.dto';
import { Student, StudentDocument } from 'src/models/student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('student')
    private readonly studentModel: Model<StudentDocument>,
  ) {}
  async createStudent(student: StudentDto): Promise<StudentDto> {
    const newStudent = new this.studentModel(student);
    return newStudent.save();
  }
  async readStudent() {
    return this.studentModel
      .find({})
      .then((student) => {
        console.log(student);
        return student;
      })
      .catch((err) => console.log(err));
  }
  async getStudentById(id: string) {
    return this.studentModel
      .findById(id)
      .then((student) => {
        return student;
      })
      .catch((err) => console.log(err));
  }
  async updateStudent(id, data): Promise<Student> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteStudent(id) {
    return this.studentModel.findByIdAndDelete(id);
  }
}
