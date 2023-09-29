import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from './createAddress.dto';

export class CreateCustomerDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
