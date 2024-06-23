'use server';

import PixProtocol from '@/interfaces/pixProtocol';

export default async function getPix(): Promise<PixProtocol | null> {
  try {
    const res = await fetch(
      `${process.env.API_PRODUCT}/get-screen-pix?screenId=${process.env.SCREEN_ID}`,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.API_KEY as string,
        },
        cache: 'no-cache',
      }
    );
    const data = await res.json();
    return data.screenPix;
  } catch (err) {
    console.log(err);
    return null;
  }
}
