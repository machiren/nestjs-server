import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
require('dotenv').config();

@Module({
  imports: [PassportModule, JwtModule.register({ secret: process.env.SECRET, signOptions: { expiresIn: '1d' } })],
  providers: [AuthService]
})
export class AuthModule { }
