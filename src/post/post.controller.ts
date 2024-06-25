import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { PostService } from './post.service'
import { Post as PostEntity } from './post.entity/post.entity'

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.findOne(id)
  }

  @Post()
  create(@Body() post: PostEntity): Promise<PostEntity> {
    return this.postService.create(post)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() post: PostEntity): Promise<PostEntity> {
    return this.postService.update(id, post)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.postService.remove(id)
  }
}
