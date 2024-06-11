import { Expose } from "class-transformer";

export class UserResponseDto{
  id_user:number;
  name: string;
  email: string;
  @Expose({name:'foto_perfil'})
  fotoPeril:string;
  @Expose({name:'created_at'})
  createdAt:Date;
  @Expose({name:'updated_at'})
  updatedAt:Date;
}