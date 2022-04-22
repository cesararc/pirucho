import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './schemas/author.schema';
import { AuthorController } from './author/author.controller';
import { AuthorService } from './author/author.service';
import { ConfigModule } from '@nestjs/config';
// import { AuthorController } from './author/author.controller';
// import { AuthorService } from './author/author.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.DB}`),
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  controllers: [AppController, AuthorController],
  providers: [AppService, AuthorService],
})
export class AppModule {}
