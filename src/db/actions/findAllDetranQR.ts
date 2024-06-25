'use server';

import connectDb from '../connect';
import DetranQRModel from '../models/detranQR';

export default async function findAllDetranQR() {
  try {
    await connectDb();
    const data = await DetranQRModel.find();
    const totalQRGenerators = data.reduce((p, n) => {
      const QRGenerators = n.QRGenerators ?? 0;
      return p + QRGenerators;
    }, 0);
    const totalQRCopied = data.reduce((p, n) => {
      const QRCopied = n.QRCopied ?? 0;
      return p + QRCopied;
    }, 0);
    return JSON.parse(
      JSON.stringify({
        totalQRGenerators,
        totalQRCopied,
      })
    );
  } catch (err) {
    console.log(err);
    return null;
  }
}
