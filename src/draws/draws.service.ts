import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Draw } from './draws.interface';
import { DrawsUploadDto } from './draws.dto';

@Injectable()
export class DrawsService {
  constructor(@Inject('DRAWS_MODEL') private model: Model<Draw>) {}

  async create(body: DrawsUploadDto): Promise<Draw> {
    const draws = new this.model(body)
    return draws.save()
  }
}
