import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClassDto } from 'src/dto/class.dto';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}
  @Post()
  async createClass(@Body() classDto: ClassDto) {
    return await this.classService.createClass(classDto);
  }
  @Get()
  async getClass() {
    return await this.classService.getClass();
  }
}
