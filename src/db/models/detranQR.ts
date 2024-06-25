import { Schema, model, models, type Document, Model } from 'mongoose';

import DetranQRProtocol from '@/interfaces/detranQRProtocol';

export interface DetranQRDocumentProtocol extends DetranQRProtocol, Document {}

const detranQRSchema = new Schema<DetranQRDocumentProtocol>({
  QRGenerators: { type: Number, required: false, default: 0 },
  QRCopied: { type: Number, required: false, default: 0 },
});

const DetranQRModel: Model<DetranQRDocumentProtocol> =
  models.DetranQR || model<DetranQRDocumentProtocol>('DetranQR', detranQRSchema); // eslint-disable-line

export default DetranQRModel;
