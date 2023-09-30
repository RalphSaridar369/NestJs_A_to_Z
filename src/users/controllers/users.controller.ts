import {
  Controller,
  Inject,
  Get,
  Post,
  Res,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Response } from 'express';
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller('controllers')
export class ControllersController {
  constructor(private readonly userService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getAllUsers(@Res() res: Response) {
    const users = this.userService.getAllUsers();
    res.status(200).json(users);
  }

  @Get('/:username')
  getUserByUsername() {}

  @Post()
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }
}
