import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true,})
export class Post {
  @Prop({ required: true, trim: true, })
  title: string;

  @Prop({ required: true, unique: true, trim: true })
  slug: string;

  @Prop()
  status: boolean;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  coverImage: string;

  @Prop()
  tags: string[];

  @Prop()
  categories: string[];

  @Prop()
  excerpt: string;
}
export const PostSchema = SchemaFactory.createForClass(Post);