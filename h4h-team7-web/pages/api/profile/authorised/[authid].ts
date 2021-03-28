import type { NextApiRequest, NextApiResponse } from 'next'
import { ProfileInterface } from '../../../../models/profile';
import ProfileRepository from '../../../../repository/ProfileRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const {
      query: { authid },
    } = req

    var profileAuthId: string = authid as string;

    switch (req.method) {
      case "GET":
        const profile =  await ProfileRepository.getByAuthId(profileAuthId)
        if (profile) res.status(200).json(profile)
        else res.status(404).json({ message: `Profile with id [${profileAuthId}] not found` })
        break;
      default:
        res.status(405).json({ message: `Method type ${req.method} is not available on this URL` })
        break;
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  } 
}
