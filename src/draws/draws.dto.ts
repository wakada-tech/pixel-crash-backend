import { Point } from './draws.interface'

export class DrawsUploadDto {
  size: [number, number]
  points: Point[] = []
  createdAt: number = Date.now()
  rules?: {
    retries?: number
    time?: number
  }
}