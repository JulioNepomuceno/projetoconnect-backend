import { Expose } from "class-transformer";

export class CommentResponseDto {

    id_comment:number;

    content: string;

    @Expose({ name: 'created_at' })
    createdAt: Date;
  
    @Expose({ name: 'updated_at' })
    updatedAt: Date;

    id_user: number;
    
    id_post: number;
}
  