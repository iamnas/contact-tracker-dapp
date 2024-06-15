import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Moralis from 'moralis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  await app.listen(3333);
}
bootstrap();
