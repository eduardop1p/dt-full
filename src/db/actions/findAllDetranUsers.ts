'use server';

import DetranUsersProtocol from '@/interfaces/detranUsersProtocol';

import connectDb from '../connect';
import DetranUsersModel from '../models/detranUsers';

export default async function findAllDetranUsers() {
  try {
    await connectDb();
    const data = (await DetranUsersModel.find().sort({
      createdIn: -1,
    })) as DetranUsersProtocol[];
    return JSON.parse(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return null;
  }
}
