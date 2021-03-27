import type { NextApiRequest, NextApiResponse } from 'next'
import PostRepository from '../../../repository/PostRepository'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const posts = PostRepository.getPosts()
    res.status(200).json(posts)
  }