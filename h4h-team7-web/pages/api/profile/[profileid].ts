import type { NextApiRequest, NextApiResponse } from 'next'
import { ProfileInterface } from '../../../models/profile';
import ProfileRepository from '../../../repository/ProfileRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const {
      query: { profileid },
    } = req

    var profileIdString: string = profileid as string;

    switch (req.method) {
      case "DELETE":
        await ProfileRepository.deleteProfile(profileIdString)
        res.status(200).send
        break;
      case "PUT":
        const { updatedprofile } = req.body 
        ProfileRepository.editProfile(updatedprofile)
        res.status(200).send
        break;
      case "GET":
        const profile =  await ProfileRepository.getProfileById(profileIdString)
        if (profile) res.status(200).json(profile)
        else res.status(404).json({ message: `Profile with id [${profileid}] not found` })
        break;
        res.status(200).send
      default:
        res.status(405).json({ message: `Method type ${req.method} is not available on this URL` })
        break;
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  } 
}
