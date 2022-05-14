import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Editorial, EditorialDocument } from './entities/editorial.schema';

@Injectable()
export class EditorialService {
  constructor(
    @InjectModel(Editorial.name)
    private editorialModel: Model<EditorialDocument>,
  ) {}

  async create(editorial: Editorial): Promise<Editorial> {
    const newEditorial = new this.editorialModel(editorial);
    return await newEditorial.save();
  }

  async findAll(): Promise<Editorial[]> {
    return await this.editorialModel.find().exec();
  }

  async findOne(id: string): Promise<Editorial> {
    return await this.editorialModel.findById(id).exec();
  }

  async update(id: string, editorial: Editorial) {
    return await this.editorialModel.findByIdAndUpdate(id, editorial, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.editorialModel.findByIdAndRemove(id);
  }
}
