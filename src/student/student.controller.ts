import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { StudentUpdateDto } from 'src/dto/studentUpdate.dto';
import { Student } from 'src/models/student.model';
import { StudentService } from './student.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { of } from 'rxjs/internal/observable/of';
import { join } from 'path';
import { StudentDto } from 'src/dto/student.dto';
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  async createStudent(@Body() studentDto: StudentDto) {
    return this.studentService.createStudent(studentDto);
  }
  @Get()
  getStudent() {
    return this.studentService.readStudent();
  }
  @Get('/:id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(id);
  }
  @Get('/detail/:email')
  getStudentByEmail(@Param('email') email: string) {
    return this.studentService.getStudentByEmail(email);
  }
  @Put('/:id')
  async updateStudent(
    @Param('id') id: string,
    @Body() updateData: StudentUpdateDto,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, updateData);
  }
  @Delete('/:id')
  async deleteStudent(@Param('id') id: string) {
    this.studentService.deleteStudent(id);
    return { msg: `${id} deleted from database` };
  }
  @Get('/profile/:filename')
  async getProfile(@Param('filename') filename, @Res() res) {
    return of(
      res.sendFile(join(process.cwd(), './src/assets/userImage/' + filename)),
    );
  }

  @Post('/uploadProfile')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './src/assets/userImage',
        filename: (req, file, callBack) => {
          const fileName =
            path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
          const extension = path.parse(file.originalname).ext;
          callBack(null, `${fileName}${extension}`);
        },
      }),
    }),
  )
  uploadFile(@Res() res, @UploadedFile() file) {
    return res.status(HttpStatus.OK).json({
      sucess: true,
      data: file.path,
    });
  }
}
