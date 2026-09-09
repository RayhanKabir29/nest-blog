import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import slugify from 'slugify';
@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const slug = slugify(createPostDto.title, { lower: true , strict: true });
  
    const post = new this.postModel({ ...createPostDto, slug });
    return post.save();
  }

  async findAll() {
    return this.postModel.find().exec();
  }
}
