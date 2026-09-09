import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './post.schema';
import mongoose, { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import slugify from 'slugify';
import { UpdatePostDto } from './dto/update-post.dto';
@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const slug = slugify(createPostDto.title, { lower: true, strict: true });

    const post = new this.postModel({ ...createPostDto, slug });
    return post.save();
  }
  async update(slug: string, updatePostDto: UpdatePostDto) {
    const post = await this.postModel.findOne({ slug }).exec();
    if (!post) {
      throw new NotFoundException(`Post with slug "${slug}" not found`);
    }

    Object.assign(post, updatePostDto);
    if (updatePostDto.title) {
      post.slug = slugify(updatePostDto.title, { lower: true, strict: true });
    }
    return post.save();
  }

  async findAll() {
    return this.postModel.find().exec();
  }

  async findOne(slug: string) {
    const post = await this.postModel.findOne({ slug }).exec();
    if (!post) {
      throw new NotFoundException(`Post with slug "${slug}" not found`);
    }
    return post;
  }

  async remove (id: string) {
    if(!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }
    const post = await this.postModel.findByIdAndDelete(id).exec();
    if (!post) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }
    return {
        message: `Post with id "${id}" has been deleted successfully`,
    };
  }
}
