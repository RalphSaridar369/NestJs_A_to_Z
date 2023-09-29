import {
  Controller,
  Inject,
  Get,
  Res,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Response } from 'express';

@Controller('controllers')
export class ControllersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getAllUsers(@Res() res: Response) {
    const users = this.userService.getAllUsers();
    res.status(200).json(users);
  }

  @Get('/:username')
  getUserByUsername() {}
}
