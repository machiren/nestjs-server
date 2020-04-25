import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutingModule } from './modules/routing.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmOptions } from './database/database';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmOptions),
    AuthModule,
    RoutingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
