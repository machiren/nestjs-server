import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../modules/users/users.module';
import { AuthController } from './auth.controller';
require('dotenv').config();
@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule.register({ secret: process.env.SECRET, signOptions: { expiresIn: '1d' } }), UsersModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
