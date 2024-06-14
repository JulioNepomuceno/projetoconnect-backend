import { PostRequestDto } from "../dto/post-request.dto";
import { PostResponseDto } from "../dto/post-response.dto";
import { Post } from "../entities/post.entity";
import { PostMapperImplement } from "./post.mapper-implement";

export class PostMapper implements PostMapperImplement{
    toPostResponse(post: Post): PostResponseDto {
        const postDto = new PostResponseDto();

        postDto.id_post = post.id_post;
        postDto.url_image =  post.url_image;
        postDto.content = post.content;
        postDto.createdAt = post.createdAt;
        postDto.updatedAt = post.updatedAt;
        postDto.id_user = post.id_user;

        return postDto;
    }
    toPostEntity(postDto: PostRequestDto,id_user: number ): Post {
        const post = new Post();
        post.url_image =  postDto.url_image;
        post.content = postDto.content;
        post.id_user = id_user;
        return post;
    }

}
