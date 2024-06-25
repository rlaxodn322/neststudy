import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Post } from './post.entity/post.entity'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find()
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOneBy({ id })
  }

  create(post: Post): Promise<Post> {
    return this.postRepository.save(post)
  }

  async update(id: number, post: Post): Promise<Post> {
    await this.postRepository.update(id, post)
    return this.postRepository.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id)
  }
}
