import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    PostModule,
    UserModule,
    CategoryModule,
    TagModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
