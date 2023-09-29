import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/createCustomer.dto';

@Injectable()
export class CustomersService {
  findCustomer(id) {
    return {
      id,
    };
  }
  createCustomer(customerDto: CreateCustomerDto) {
    console.log(customerDto);
  }
}
