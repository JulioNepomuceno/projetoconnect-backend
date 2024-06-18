import { User } from "src/users/entities/user.entity";
import { PostRequestDto } from "../dto/post-request.dto";
import { PostResponseDto } from "../dto/post-response.dto";
import { Post } from "../entities/post.entity";


export abstract class PostMapperImplement{
    abstract toPostResponse(user: Post): PostResponseDto;
    abstract toPostEntity(userDto: PostRequestDto, id_user?:number): Post;
}