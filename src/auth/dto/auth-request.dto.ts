import { IsNotEmpty } from "class-validator";

export class UserAuthRequestDto{

    @IsNotEmpty({message:'E-mail e obrigatorio'})
    email:string;
    
    @IsNotEmpty({message:'senha e obrigatorio'})
    password:string;
}