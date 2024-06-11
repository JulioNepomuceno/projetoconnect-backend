import { UserRequestDto } from "../dto/user-request.dto";
import { UserResponseDto } from "../dto/user-response.dto";
import { User } from "../entities/user.entity";

export abstract class UserMapperInterface{
    abstract toUserResponse(user: User): UserResponseDto;
    abstract toUserEntity(userDto: UserRequestDto): User;
}