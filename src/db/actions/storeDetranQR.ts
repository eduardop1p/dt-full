'use server';

import DetranQRProtocol from '@/interfaces/detranQRProtocol';

import connectDb from '../connect';
import DetranQRModel from '../models/detranQR';

export default async function storeDetranQR(body: DetranQRProtocol) {
  try {
    await connectDb();
    const lightQR = await DetranQRModel.create(body);
    const id = lightQR._id as string;
    return JSON.parse(JSON.stringify(id));
  } catch (err) {
    console.log(err);
    return null;
  }
}
