import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DrawsUploadDto } from './draws.dto';
import { DrawsService } from './draws.service';

@Controller('draws')
export class DrawsController {
  constructor(private service: DrawsService) {}

  @Post()
  upload(@Body() body: DrawsUploadDto) {
    this.service.create(body)
  }

  @Get('list')
  list() {
    return this.service.list()
  }

  @Get('get/:id')
  find(@Param('id') id: string) {
    return this.service.find(id)
  }

  @Get('top')
  top() {
    return this.service.top() 
  }
}
