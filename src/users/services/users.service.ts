import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../types/users';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dtos/createUser.dto';
import { User as UserEntity } from 'src/typeORM';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [{ id: 1, username: 'test', password: 'test' }];

  getAllUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
}
