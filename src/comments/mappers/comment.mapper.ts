import { CommentRequestDto } from "../dto/comment-request.dto";
import { CommentResponseDto } from "../dto/comment-response.dto";
import { Comment } from "../entities/comment.entity";
import { CommentsMapperImplement } from "./comment.mapper-implement";


export class CommentsMapper implements CommentsMapperImplement{
    toCommentResponse(comment: Comment): CommentResponseDto {

        const commentDto = new CommentResponseDto();

        commentDto.id_comment = comment.id_comment;
        commentDto.content = comment.content;
        commentDto.id_user = comment.id_user;
        commentDto.id_post = comment.id_post;
        commentDto.createdAt = comment.createdAt;
        commentDto.updatedAt = comment.updatedAt;

        return commentDto;
    }
    
    toCommentEntity(commentDto: CommentRequestDto, id_user: number): Comment {

        const comment = new Comment;

        comment.content = commentDto.content;
        comment.id_post = commentDto.id_post;
        comment.id_user = id_user;
        
        return comment;
    }
    

}
