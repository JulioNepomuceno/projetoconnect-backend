import { Expose } from 'class-transformer';

export class PostResponseDto {

  id_post: number;

  url_image: string;

  content: string;

  @Expose({ name: 'created_at' })
  createdAt: Date;

  @Expose({ name: 'updated_at' })
  updatedAt: Date;
  
  id_user: number;
}
