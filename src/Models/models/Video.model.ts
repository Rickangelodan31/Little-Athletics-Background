// models/Video.ts
import { Schema, model, Document } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  url: string;
  uploadedBy: string; // admin id or name
  createdAt: Date;
}

const videoSchema = new Schema<IVideo>({
  title: { type: String, required: true },
  url: { type: String, required: true },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export const Video = model<IVideo>('Video', videoSchema);