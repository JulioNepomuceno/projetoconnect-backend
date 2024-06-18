import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";
import { JwtPayload } from "./jwt-payload";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(private userService: UsersService, private jwtService: JwtService){
        super({
            secretOrKey:'c84ebcf448dee6d97fc79267cb61ce8a',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
        });
    }

    async validate(payload: JwtPayload){
        const {email} = payload;
        const user = await this.userService.findOneByEmail(email);
        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}

