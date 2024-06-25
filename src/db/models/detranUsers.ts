import { Schema, model, models, type Document, Model } from 'mongoose';

import DetranUsersProtocol from '@/interfaces/detranUsersProtocol';

export interface DetranUsersDocumentProtocol
  extends DetranUsersProtocol,
    Document {}

const detranUsersSchema = new Schema<DetranUsersDocumentProtocol>({
  value: { type: Number, required: false },
  copied: { type: Boolean, required: false },
  uf: { type: String, required: false },
  location: { type: String, required: false },
  createdIn: { type: Date, required: false, default: Date.now },
});

const DetranUsersModel: Model<DetranUsersDocumentProtocol> =
  models.DetranUsers || model<DetranUsersDocumentProtocol>('DetranUsers', detranUsersSchema); // eslint-disable-line

export default DetranUsersModel;
