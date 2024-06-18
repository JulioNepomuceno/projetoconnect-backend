import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {}

  async create(userId: number, postId: number, createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = new Comment();
    comment.content = createCommentDto.content;
    comment.id_user = userId;
    comment.id_post = postId;
    return await this.commentRepository.save(comment);
  }

  async findAll(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  async findOne(id_comment: number): Promise<Comment> {
    const comment = await this.commentRepository.findOne({ where: { id_comment } });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id_comment} not found`);
    }
    return comment;
  }

  async update(id_comment: number, updateCommentDto: UpdateCommentDto): Promise<Comment> {
    const updateResult = await this.commentRepository.update(id_comment, updateCommentDto);
    if (updateResult.affected === 0) {
      throw new NotFoundException(`Comment with ID ${id_comment} not found`);
    }
    const updatedComment = await this.commentRepository.findOne({ where: { id_comment } });
    return updatedComment;
  }

  async remove(id_comment: number): Promise<void> {
    const result = await this.commentRepository.delete(id_comment);
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with ID ${id_comment} not found`);
    }
  }
}
