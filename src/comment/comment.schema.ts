import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop()
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);