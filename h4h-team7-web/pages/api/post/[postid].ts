import type { NextApiRequest, NextApiResponse } from 'next'
import PostRepository from '../../../repository/PostRepository'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body)
    const { postId } = body
    switch (req.method) {
      case "DELETE":
        PostRepository.deletePost(postId)
        res.status(200).send
        break;
      case "PUT":
        PostRepository.editPost(postId, body.post)
        res.status(200).send
        break;
      case "GET":
        const post = PostRepository.getPostById(postId)
        if (post) res.status(200).json(post)
        else res.status(404).json({ message: `Post with id [${postId}] not found` })
        break;
      default:
        res.status(405).json({ message: `Method type ${req.method} is not available on this URL` })
        break;
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  } 
}
