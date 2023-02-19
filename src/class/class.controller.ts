import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClassDto } from 'src/dto/class.dto';
import { StudentOfClassDto } from 'src/dto/student_of_class.dto';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}
  @Post()
  async createClass(@Body() classDto: ClassDto) {
    return await this.classService.createClass(classDto);
  }
  @Post('/:id')
  async createStudentOfClass(
    @Param('id') id: string,
    @Body() studentOfClass: StudentOfClassDto,
  ) {
    return await this.classService.createStudentOfClass(id, studentOfClass);
  }
  @Get('/:id')
  async getClassById(@Param('id') id: string) {
    return await this.classService.getClassById(id);
  }
  @Get()
  async getClass() {
    return await this.classService.getClass();
  }
}
