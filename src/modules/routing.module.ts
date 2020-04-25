import { RouterModule, Routes } from 'nest-router';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from 'src/auth/auth.module';

const routes: Routes = [
	{
		path: 'signup',
		module: AuthModule
	},
	{
		path: 'users',
		module: UsersModule,
	},
];

@Module({
	imports: [
		RouterModule.forRoutes(routes),
		UsersModule
	]
})
export class RoutingModule { };