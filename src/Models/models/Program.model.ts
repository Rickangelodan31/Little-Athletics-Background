// models/Program.ts
import { Schema, model, Document } from 'mongoose';

export interface IProgram extends Document {
  name: string;
  ageRange: string; // e.g., "18 months - 3 years"
  day: string; // e.g., "Monday"
  time: string; // e.g., "4:00 PM - 5:00 PM"
  maxCapacity: number;
  enrolledCount: number;
  price: number; // cost per session
  createdAt: Date;
  updatedAt: Date;
}

const programSchema = new Schema<IProgram>(
  {
    name: { type: String, required: true },
    ageRange: { type: String, required: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    maxCapacity: { type: Number, required: true },
    enrolledCount: { type: Number, default: 0 },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Program = model<IProgram>('Program', programSchema);
