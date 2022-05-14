import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './entities/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(category: Category): Promise<Category> {
    const newCategory = new this.categoryModel(category);
    return await newCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoryModel.findById(id).exec();
  }

  async update(id: string, category: Category) {
    return await this.categoryModel.findByIdAndUpdate(id, category, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.categoryModel.findByIdAndRemove(id);
  }
}
