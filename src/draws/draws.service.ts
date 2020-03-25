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

  async list(): Promise<Draw[]> {
    return this.model.find().exec()
  }

  async find(id: string): Promise<Draw> {
    return (await this.model.findById(id)).execPopulate()
  }

  async top(): Promise<Draw[]> {
    return this.model.find().sort({ createdAt: -1 }).limit(10)
  }
}
