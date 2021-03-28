import type { NextApiRequest, NextApiResponse } from 'next'
import ProfileRepository from '../../../repository/ProfileRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const profiles = await ProfileRepository.getProfiles()
    res.status(200).json(profiles)
  }