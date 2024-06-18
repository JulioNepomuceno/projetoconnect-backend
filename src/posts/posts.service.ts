import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostRequestDto } from './dto/post-request.dto';
import { PostMapper } from './mappers/post.mapper';

@Injectable()
export class PostsService {

  constructor(private postMapper:PostMapper,  @InjectRepository(Post) private postRepository: Repository<Post>){}

 async create(id_user:number,postRequestDto: PostRequestDto) {

    const post = this.postMapper.toPostEntity(postRequestDto,id_user);
    
    const post_salvo = await this.postRepository.save(post);
   
    return this.postMapper.toPostResponse(post_salvo);
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
