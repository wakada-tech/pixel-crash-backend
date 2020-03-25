import * as mongoose from "mongoose";

export const drawsSchema = new mongoose.Schema({
  size: Array,
  points: [{ x: Number, y: Number, color: String }],
})