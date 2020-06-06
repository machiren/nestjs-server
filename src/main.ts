import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: process.env.NODE_ENV === 'development' ? ['log', 'error', 'warn', 'debug', 'verbose'] : ['log', 'error', 'warn'],
    cors: true,
  });
  app.setGlobalPrefix(process.env.API_PREFIX || 'api');
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true, }));
  app.use(helmet());
  app.use(rateLimit({ windowMs: 60 * 60 * 1000, max: 500 }))
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
