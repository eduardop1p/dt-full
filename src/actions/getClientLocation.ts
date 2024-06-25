'use server';

import clientLocationProtocol from '@/interfaces/clientLocationProtocol';

export default async function getClientLocation() {
  try {
    const res = await fetch('https://ipinfo.io/json?token=3366dff7a4ac25', {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error('error');
    const data: clientLocationProtocol = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
