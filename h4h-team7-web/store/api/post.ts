import { apiFetch, POST_ENDPOINT, toJson, POST, GET, PUT, DELETE } from "."
import { PostInterface } from "../../models/post"
import { Post } from "../types"

export const getPostsReal = async (): Promise<Post[]> => {
  return await apiFetch(POST_ENDPOINT).then(toJson)
}

export const createPost = async (post: PostInterface): Promise<{ id: string }> => {
  return await apiFetch(POST_ENDPOINT + "/create", {
    method: POST,
    body: JSON.stringify({ post })
  }).then(toJson)
}

export const getPostById = async (postId: number): Promise<Post | undefined> => {
  return await apiFetch(`${POST_ENDPOINT}/${postId}`, {
    method: GET,
  }).then(toJson)
}

export const updatePostById = async (post: PostInterface): Promise<{ id: string }> => {
  return await apiFetch(`${POST_ENDPOINT}/${post.id}`, {
    method: PUT,
    body: JSON.stringify({ post })
  }).then(() => ({ id: `${post.id}` }) )
}

export const deletePostById = async (postId: number): Promise<{ id: string }> => {
  return await apiFetch(`${POST_ENDPOINT}/${postId}`, {
    method: DELETE,
  }).then(() => ({ id: `${postId}` }) )
}