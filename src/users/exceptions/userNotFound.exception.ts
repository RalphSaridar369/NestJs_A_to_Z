import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(msg?: string, status?: HttpStatus) {
    super(msg || 'User not foud', status || HttpStatus.NOT_FOUND);
  }
}

//incase of error, in our controller we can do throw new UserNotFoundException()
