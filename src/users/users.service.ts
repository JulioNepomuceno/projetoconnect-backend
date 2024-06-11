import { Injectable } from '@nestjs/common';
import { UserMapper } from './mappers/user.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserRequestDto } from './dto/user-request.dto';


@Injectable()
export class UsersService {

 constructor(private userMapper: UserMapper, @InjectRepository(User) private userRepository: Repository<User>){
  
 }


 async create(userRequestDto: UserRequestDto) {

    const user =  this.userMapper.toUserEntity(userRequestDto);
  
    const user_save = await this.userRepository.save(user);

    return this.userMapper.toUserResponse(user_save);

  }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
