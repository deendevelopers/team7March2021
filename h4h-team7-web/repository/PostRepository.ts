import { Post as MongoPost, PostInterface } from "../models/post";
import db from './MongoDb';

console.log(db)

class PostRepository {

  constructor() {}

  public async getPosts() {
    return await MongoPost.find({})
  }

  public async getPostById(id: number): Promise<PostInterface | undefined> {
    return await MongoPost.findById(id).exec();
  }

  public async createPost(post: PostInterface): Promise<void> {
    return await MongoPost.create(post)
  }

  public async editPost(postId: number, post: PostInterface): Promise<void> {
    return MongoPost.findByIdAndUpdate(postId, post, {}, () => {
      console.log("Updated")
    })
  }

  public async deletePost(id: number): Promise<void> {
    MongoPost.findByIdAndDelete(id, {}, () => {
      console.log("Deleted");
    })
  }

}

export default new PostRepository();