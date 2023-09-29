import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Req,
  Res,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from '../dtos/createCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get('/:id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersService.findCustomer(id);
    res.status(200).json(customer);
  }

  @Get('/search/:id')
  searchCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersService.findCustomer(id);
    res.status(200).json(customer);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createCustomer(
    @Body() createCustomerDto: CreateCustomerDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
