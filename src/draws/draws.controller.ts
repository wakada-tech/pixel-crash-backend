import { Controller, Post, Body } from '@nestjs/common';
import { DrawsUploadDto } from './draws.dto';

@Controller('draws')
export class DrawsController {
  @Post()
  upload(@Body() drawsUploadDto: DrawsUploadDto) {
    return drawsUploadDto
  }
}
