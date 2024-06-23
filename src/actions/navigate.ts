'use server';

import { permanentRedirect } from 'next/navigation';

export default async function navigate(path: string) {
  permanentRedirect(path);
}
