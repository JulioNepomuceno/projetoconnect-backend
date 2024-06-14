import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Post } from './entities/post.entity';
import { PostMapper } from './mappers/post.mapper';

@Module({
  imports:[TypeOrmModule.forFeature([Post,User])],
  controllers: [PostsController],
  providers: [PostsService,PostMapper],
})
export class PostsModule {}
