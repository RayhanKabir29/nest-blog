import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const post = new this.postModel(createPostDto);
    return post.save();
  }

  async findAll() {
    return this.postModel.find().exec();
  }
}
