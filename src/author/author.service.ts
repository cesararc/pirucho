import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author, AuthorDocument } from 'src/schemas/author.schema';
import { Model } from 'mongoose';
// import { CreateAuthorDto } from './dto/create-author.dto';
// import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async create(author: Author): Promise<Author> {
    const newAuthor = new this.authorModel(author);
    return await newAuthor.save();
  }

  // findAll() {
  //   return `This action returns all author`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} author`;
  // }

  async update(id: number, author: Author): Promise<Author> {
    return await this.authorModel.findByIdAndUpdate(id, author, { new: true });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} author`;
  // }
}
