import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn('increment')
    id_post: number;

    @Column({nullable:true, length:255}) // true provisorio
    url_image:string;

    @Column({nullable:true})
    content:string;

    @CreateDateColumn({type:'timestamp', default:()=>'CURRENT_TIMESTAMP(6)'})
    createdAt: Date;
  
    @UpdateDateColumn({type:'timestamp', default:()=>'CURRENT_TIMESTAMP(6)', onUpdate:'CURRENT_TIMESTAMP(6)'})
    updatedAt: Date;
    
    @Column({ name: 'id_user' })
    id_user: number;

    @ManyToOne(()=>User, (user) => user.post)
    @JoinColumn({name:'id_user'})
    user:User;
  
}
