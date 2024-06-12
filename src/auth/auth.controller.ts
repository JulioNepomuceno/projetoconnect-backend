import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthRequestDto } from './dto/auth-request.dto';

@Controller('api/auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('login')
  async login(@Body() userDto: UserAuthRequestDto){
    return  await this.authService.validateUser(userDto.email, userDto.password);
  }


}
