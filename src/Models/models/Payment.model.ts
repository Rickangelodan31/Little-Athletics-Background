// models/Payment.ts
import { Schema, model, Document, Types } from 'mongoose';

export interface IPayment extends Document {
  booking: Types.ObjectId;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  transactionId?: string;
  createdAt: Date;
}

const paymentSchema = new Schema<IPayment>({
  booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  transactionId: { type: String },
}, { timestamps: true });

export const Payment = model<IPayment>('Payment', paymentSchema);
