import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDto } from 'src/student/dto/student.dto';
import { Student, StudentDocument } from 'src/student/schemas/student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('student')
    private readonly studentModel: Model<StudentDocument>,
  ) {}
  async createStudent(student: StudentDto): Promise<Student> {
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
  async getStudentByEmail(email: string) {
    const user = await this.studentModel.findOne({ email });
    return user;
  }
  async getStudentById(id: string) {
    try {
      return this.studentModel.findById(id).then((student) => {
        return student;
      });
    } catch (error) {
      throw error;
    }
  }

  async updateStudent(id, data): Promise<Student> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteStudent(id) {
    return this.studentModel.findByIdAndDelete(id);
  }
}
