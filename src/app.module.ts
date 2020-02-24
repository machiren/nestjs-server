import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'todolist',
    entities: [],
    synchronize: true,
  }),
    // UsersModule
  ],
  controllers: [AppController],
  providers: [AppService,
    // UserService
  ],
})
export class AppModule { }
