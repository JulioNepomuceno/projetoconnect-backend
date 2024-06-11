import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Length, isNotEmpty } from "class-validator";

export class UserRequestDto {

  @IsString({message:'Nome teve ser uma string'})
  @Length(3,100,{message:'Nome deve ter de 3 até 100 caracteres'})
  @IsNotEmpty({message:'Nome não pode ser vazio'})
  name: string;

  @IsEmail({},{message:'E-mail inválido'})
  @IsNotEmpty({message:'E-mail não pode ser vazio'})
  //@Validate(IsEmailExists)
  email: string;
  
  @IsNotEmpty({message:'senha não pode ser vazio'})
  password: string;

  @IsNotEmpty({message:'senha não pode ser vazio'})
  @Expose({name:'password_confirmation'})
  passwordConfirmation:string
}
