import { Controller, Get, Post, Query, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from 'src/auth/auth.decorator';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    find(@Auth() authId: any, @Query() query: any) {
        return this.usersService.find(query);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findOne(@Auth() authId: any, @Param('id') userId: string) {
        return this.usersService.findOne(userId);
    }

    @Post()
    register(@Body() body: any) {
        return this.usersService.signUp(body);
    }
}
