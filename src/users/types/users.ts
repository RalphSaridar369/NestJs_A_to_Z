import { IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
}

export class SerializedUser {
  @IsNotEmpty()
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
