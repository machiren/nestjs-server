import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';
require('dotenv').config();

export const TypeOrmOptions: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'todo',
    entities: [UsersEntity],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    subscribers: [__dirname + '/subscribers/*{.ts,.js}'],
    // 今回はマイグレーションで世代管理するのでシンクロナイズはfalseにする
    synchronize: true,
    // 最初のマイグレーションは自動で走る
    migrationsRun: true,
    logging: process.env.NODE_ENV === 'development' || true,
};
