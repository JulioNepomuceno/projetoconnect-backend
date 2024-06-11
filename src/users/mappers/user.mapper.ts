import { UserRequestDto } from '../dto/user-request.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { User } from '../entities/user.entity';
import { UserMapperInterface } from './user.mapper-interface';

export class UserMapper implements UserMapperInterface {
    toUserResponse(user: User): UserResponseDto {
        const userDto = new UserResponseDto();
        
        userDto.id_user = user.id_user
        userDto.name = user.name;
        userDto.email = user.email;
        userDto.fotoPeril = user.fotoPerfil;
        userDto.createdAt = user.createdAt;
        userDto.updatedAt = user.updatedAt;
        
        return userDto;
    }
    toUserEntity(userDto: UserRequestDto): User {
        const user = new User();
        user.name = userDto.name;
        user.email = userDto.email;
        user.password = userDto.password;

        return user
    }
  
}
