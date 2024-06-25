'use server';

import DetranUsersProtocol from '@/interfaces/detranUsersProtocol';

import connectDb from '../connect';
import DetranUsersModel from '../models/detranUsers';

export default async function storeDetranUsers(body: DetranUsersProtocol) {
  try {
    await connectDb();
    const detranUser = await DetranUsersModel.create(body);
    const id = detranUser._id as string;
    return JSON.parse(JSON.stringify(id));
  } catch (err) {
    console.log(err);
    return null;
  }
}
