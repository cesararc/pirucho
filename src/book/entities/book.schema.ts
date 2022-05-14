import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Author } from 'src/author/entities/author.schema';
import { Category } from 'src/category/entities/category.schema';
import { Editorial } from 'src/editorial/entities/editorial.schema';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  isbn: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  edition: string;

  @Prop()
  observation: string;

  @Prop({ type: Types.ObjectId, ref: 'Author' })
  author: Author;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ type: Types.ObjectId, ref: 'Editorial' })
  editorial: Editorial;
}

export const BookSchema = SchemaFactory.createForClass(Book);
