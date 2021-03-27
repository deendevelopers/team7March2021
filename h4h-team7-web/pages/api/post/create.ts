import type { NextApiRequest, NextApiResponse } from 'next'
import PostRepository from '../../../repository/PostRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { post } = JSON.parse(req.body)
  PostRepository.createPost(post);
  res.status(201).end();
}