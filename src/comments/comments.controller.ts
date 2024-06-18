import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from 'src/users/entities/user.entity';

@Controller('api/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @Post(':postId')
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Param('postId') postId: string,//tira o post id de paramentro
    @Body() createCommentDto: CreateCommentDto,
    @GetUser() user: User,
  ) {
    const userId = user.id; 
    return this.commentsService.create(userId, +postId, createCommentDto); 
  }

  @Get()
  async findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}



