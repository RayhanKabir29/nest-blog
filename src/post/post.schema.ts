import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  slug: string;

  @Prop()
  status: boolean;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  publishedAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  coverImage: string;
}