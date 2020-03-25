import * as mongoose from "mongoose";

export const drawsSchema = new mongoose.Schema({
  size: Array,
  points: [{ x: Number, y: Number, color: String }],
  createdAt: { type: Date, default: Date.now },
  rules: {
    retries: { type: Number, default: 5 },
    time: Number
  }
})