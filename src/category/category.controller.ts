import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entities/category.schema';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Res() res, @Body() category: Category) {
    const newCategory = await this.categoryService.create(category);
    return res.status(HttpStatus.CREATED).json({
      newCategory,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const category = await this.categoryService.findAll();
    return res.status(HttpStatus.OK).json(category);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const category = await this.categoryService.findOne(id);
    return res.status(HttpStatus.OK).json({ category });
  }

  @Put(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() category: Category,
  ) {
    const updateCategory = await this.categoryService.update(id, category);
    return res.status(HttpStatus.OK).json({ updateCategory });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const removeCategory = await this.categoryService.remove(id);
    return res.status(HttpStatus.OK).json({ removeCategory });
  }
}
