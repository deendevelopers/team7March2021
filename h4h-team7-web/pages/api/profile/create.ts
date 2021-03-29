import type { NextApiRequest, NextApiResponse } from 'next'
import ProfileRepository from '../../../repository/ProfileRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { profile } = req.body
    const savedProfile = await ProfileRepository.createProfile(profile);
    res.status(201).json({ _id: savedProfile._id });
  } else {
    res.status(405).json({ message: `Method type ${req.method} is not available on this URL` });
  }
}