'use server';

import jwt from 'jsonwebtoken';

export default async function createToken(data: any) {
  const token = jwt.sign(data, process.env.SECRET as string);
  return token;
}
