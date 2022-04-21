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

  async findAll(): Promise<Author[]> {
    return await this.authorModel.find().exec();
  }

  async findOne(id: string): Promise<Author> {
    return await this.authorModel.findById(id).exec();
  }

  async update(id: string, author: Author): Promise<Author> {
    return await this.authorModel.findByIdAndUpdate(id, author, { new: true });
  }

  async remove(id: string) {
    return await this.authorModel.findByIdAndRemove(id);
  }
}
