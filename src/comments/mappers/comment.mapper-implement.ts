import { CommentRequestDto } from "../dto/comment-request.dto";
import { CommentResponseDto } from "../dto/comment-response.dto";
import { Comment } from "../entities/comment.entity";



export abstract class CommentsMapperImplement{
    abstract toCommentResponse(comment: Comment): CommentResponseDto;
    abstract toCommentEntity(commentDto: CommentRequestDto, id_user?:number): Comment;
}