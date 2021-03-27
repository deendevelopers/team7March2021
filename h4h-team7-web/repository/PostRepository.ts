import { Post } from "./types";

class PostRepository {

  private posts: Post[] = [];

  constructor() {}

  public getPosts() {
    return this.posts;
  }

  public getPostById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  public createPost(post: Post): void {
    this.posts = [...this.posts, post];
  }

  public editPost(post: Post): void {
    this.posts = this.posts.map(p => p.id === post.id ? post: p)
  }

  public deletePost(id: number): void {
    this.posts = this.posts.filter(p => p.id !== id)
  }

}

export default new PostRepository();