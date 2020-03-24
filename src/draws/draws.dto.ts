import { Point } from './draws.interface'

export class DrawsUploadDto {
  size: [number, number]
  points: Point[] = []
}