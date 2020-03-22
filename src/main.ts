import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(process.env.API_PREFIX || 'api');
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true, }));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
