import { Body, Controller, Delete, Get,Param,Patch,Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

@Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Patch(`:slug`)
  update(
    @Param('slug') slug: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(slug, updatePostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }
  @Get(`:slug`)
  findOne(@Param('slug') slug: string) {
    return this.postService.findOne(slug);
  }

  @Delete(`:id`)
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
