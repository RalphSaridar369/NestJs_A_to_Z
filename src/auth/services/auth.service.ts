import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_USERVICE') private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUsername(username);
    if (userDB) console.log('all good');
  }
}
