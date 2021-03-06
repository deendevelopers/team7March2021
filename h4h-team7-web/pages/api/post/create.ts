import type { NextApiRequest, NextApiResponse } from 'next'
import PostRepository from '../../../repository/PostRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { post } = req.body
  const { _id } = await PostRepository.createPost(post);
  res.status(201).json({ _id });
}