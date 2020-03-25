import { Document } from 'mongoose'
export interface Point {
  x: number
  y: number
  color: string
}

export interface Draw extends Document {
  size: [number, number],
  points: Point[]
}
