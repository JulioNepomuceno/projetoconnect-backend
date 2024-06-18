import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id_user: number;

  @Column({ nullable: false, length:100 })
  name: string;

  @Column({ nullable: false, unique:true, length:100 })
  email: string;

  @Column({nullable:true, length:255})
  profilePhoto:string;

  @Column({ nullable: false, length:255 })
  password: string;

  @CreateDateColumn({type:'timestamp', default:()=>'CURRENT_TIMESTAMP(6)'})
  createdAt: Date;

  @UpdateDateColumn({type:'timestamp', default:()=>'CURRENT_TIMESTAMP(6)', onUpdate:'CURRENT_TIMESTAMP(6)'})
  updatedAt: Date;

  @OneToMany(()=>Post, (post) =>post.user)
  post:Post

  @OneToMany(()=> Comment, (comment) => comment.user)
  comment: Comment;
  


  @BeforeInsert()
  async setPassword(password?:string){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password,salt);
  }
}
