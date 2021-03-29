import { Post as MongoPost, PostInterface } from "../models/post";
import db from './MongoDb';

console.log(db)

class PostRepository {

  constructor() {}

  public async getPosts() {
    return await MongoPost.find({})
  }

  public async getPostById(id: string): Promise<PostInterface | undefined> {
    return await MongoPost.findById(id).exec();
  }

  public async createPost(post: PostInterface): Promise<PostInterface> {
    return await MongoPost.create(post)
  }

  public async editPost(postId: string, post: PostInterface): Promise<void> {
    return MongoPost.findByIdAndUpdate(postId, post, {}, () => {
      console.log("Updated")
    })
  }

  public async deletePost(id: string): Promise<void> {
    MongoPost.findByIdAndDelete(id, {}, () => {
      console.log("Deleted");
    })
  }

}

export default new PostRepository();