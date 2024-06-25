'use server';

import DetranQRProtocol from '@/interfaces/detranQRProtocol';

import connectDb from '../connect';
import DetranQRModel from '../models/detranQR';

export default async function updateDetranQR(
  body: DetranQRProtocol,
  id: string
) {
  try {
    await connectDb();
    await DetranQRModel.findByIdAndUpdate(id, body, { new: true });
  } catch (err) {
    console.log(err);
    return null;
  }
}
