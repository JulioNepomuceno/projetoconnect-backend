import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
 

@Injectable()
export class AuthService {
    
  constructor(private userService: UsersService, private jwtService: JwtService){}

  async validateUser(username: string, password:string){

    const user = await this.userService.findOneByEmail(username);

    if(!user){
      throw new UnauthorizedException();
    }

    if(await bcrypt.compare(password, user.password)){
      return await this.gerarToken(user);
    }
  }


 async gerarToken(payload: User) {

    const accessToken = this.jwtService.sign(
      { email: payload.email},
      {secret: 'c84ebcf448dee6d97fc79267cb61ce8a', expiresIn:'130s'}
    );
    return {token:accessToken}
  }


}
