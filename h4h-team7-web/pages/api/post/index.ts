import type { NextApiRequest, NextApiResponse } from 'next'
import PostRepository from '../../../repository/PostRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const posts = await PostRepository.getPosts()
    res.status(200).json(posts)
  }