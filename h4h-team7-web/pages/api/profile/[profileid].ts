import type { NextApiRequest, NextApiResponse } from 'next'
import ProfileRepository from '../../../repository/ProfileRepository'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    // not sure why "name" required on for const below
    const {
      query: { profileid, name },
      method,
    } = req

    const profileIdNumber: number = + profileid;

    switch (req.method) {
      case "DELETE":
        ProfileRepository.deleteProfile(profileIdNumber)
        res.status(200).send
        break;
      case "PUT":
        const { updatedprofile } = req.body 
        ProfileRepository.editProfile(updatedprofile)
        res.status(200).send
        break;
      case "GET":
        const post = ProfileRepository.getProfileById(profileIdNumber)
        if (post) res.status(200).json(post)
        else res.status(404).json({ message: `Profile with id [${profileIdNumber}] not found` })
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
