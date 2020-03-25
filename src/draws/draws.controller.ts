import { Controller, Post, Body } from '@nestjs/common';
import { DrawsUploadDto } from './draws.dto';
import { DrawsService } from './draws.service';

@Controller('draws')
export class DrawsController {
  constructor(private service: DrawsService) {}

  @Post()
  upload(@Body() body: DrawsUploadDto) {
    this.service.create(body)
  }
}
