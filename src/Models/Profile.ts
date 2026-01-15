// models/Profile.ts
import { Schema, model, Document, Types } from 'mongoose';

export interface IProfile extends Document {
  parent: Types.ObjectId; // reference to User
  childName: string;
  age: number;
  enrolledPrograms: Types.ObjectId[]; // references Program/Booking
  createdAt: Date;
  updatedAt: Date;
}

const profileSchema = new Schema<IProfile>(
  {
    parent: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    childName: { type: String, required: true },
    age: { type: Number, required: false },
    enrolledPrograms: [{ type: Schema.Types.ObjectId, ref: 'Program' }],
  },
  { timestamps: true }
);

export const Profile = model<IProfile>('Profile', profileSchema);
