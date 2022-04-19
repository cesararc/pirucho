import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './schemas/author.schema';
import { AuthorController } from './author/author.controller';
import { AuthorService } from './author/author.service';
// import { AuthorController } from './author/author.controller';
// import { AuthorService } from './author/author.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bdbiblioteca'),
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  controllers: [AppController, AuthorController],
  providers: [AppService, AuthorService],
})
export class AppModule {}
