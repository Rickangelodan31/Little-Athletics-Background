// models/Booking.ts
import { Schema, model, Document, Types } from 'mongoose';

export interface IBooking extends Document {
  profile: Types.ObjectId; // child profile
  program: Types.ObjectId; // program enrolled
  paid: boolean;
  paymentId?: string; // if using payment gateway like Stripe
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    profile: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    program: { type: Schema.Types.ObjectId, ref: 'Program', required: true },
    paid: { type: Boolean, default: false },
    paymentId: { type: String },
  },
  { timestamps: true }
);

export const Booking = model<IBooking>('Booking', bookingSchema);
