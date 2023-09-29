import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../types/users';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [{ username: 'test', password: 'test' }];

  getAllUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }
}
