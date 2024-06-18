import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRequestDto } from './dto/comment-request.dto';
import { CommentsMapper } from './mappers/comment.mapper';

@Injectable()
export class CommentsService {
  constructor(
    private commentMapper: CommentsMapper,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {}

  async create(id_user: number, commentRequestDto: CommentRequestDto){
    
    const commet = this.commentMapper.toCommentEntity(commentRequestDto, id_user);

    const comment_salvo = await this.commentRepository.save(commet);
    
    return this.commentMapper.toCommentResponse(comment_salvo);
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
