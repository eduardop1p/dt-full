'use server';

import DetranUsersProtocol from '@/interfaces/detranUsersProtocol';

import connectDb from '../connect';
import DetranUsersModel from '../models/detranUsers';

export default async function updateDetranUsers(
  body: DetranUsersProtocol,
  id: string
) {
  try {
    await connectDb();
    await DetranUsersModel.findByIdAndUpdate(id, body, { new: true });
  } catch (err) {
    console.log(err);
    return null;
  }
}
