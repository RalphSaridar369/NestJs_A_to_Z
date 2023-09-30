import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from 'src/users/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeORM';
import { LocalStrategy } from './utils/LocalStrategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthController, PassportModule],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },

    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    LocalStrategy,
  ],
})
export class AuthModule {}
