import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './author/entities/author.schema';
import { AuthorController } from './author/author.controller';
import { AuthorService } from './author/author.service';
import { ConfigModule } from '@nestjs/config';
import { Category, CategorySchema } from './category/entities/category.schema';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import {
  Editorial,
  EditorialSchema,
} from './editorial/entities/editorial.schema';
import { EditorialController } from './editorial/editorial.controller';
import { EditorialService } from './editorial/editorial.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.DB}`),
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Editorial.name, schema: EditorialSchema },
    ]),
  ],
  controllers: [
    AppController,
    AuthorController,
    CategoryController,
    EditorialController,
  ],
  providers: [AppService, AuthorService, CategoryService, EditorialService],
})
export class AppModule {}
