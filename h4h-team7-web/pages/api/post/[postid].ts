import type { NextApiRequest, NextApiResponse } from 'next'
import PostRepository from '../../../repository/PostRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body)
    
    // not sure why "name" required on for const below
    const {
      query: { profileid, name },
      method,
    } = req

    const profileIdNumber: number = + profileid;

    switch (req.method) {
      case "DELETE":
        await PostRepository.deletePost(profileIdNumber)
        res.status(200).send
        break;
      case "PUT":
        await PostRepository.editPost(profileIdNumber, body.post)
        res.status(200).send
        break;
      case "GET":
        const post = await PostRepository.getPostById(profileIdNumber)
        if (post) res.status(200).json(post)
        else res.status(404).json({ message: `Post with id [${profileIdNumber}] not found` })
        break;
      default:
        res.status(405).json({ message: `Method type ${req.method} is not available on this URL` })
        break;
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  } 
}
