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
import { EditorialService } from './editorial.service';
import { Editorial } from './entities/editorial.schema';

@Controller('editorial')
export class EditorialController {
  constructor(private readonly editorialService: EditorialService) {}

  @Post()
  async create(@Res() res, @Body() editorial: Editorial) {
    const newCategory = await this.editorialService.create(editorial);
    return res.status(HttpStatus.CREATED).json({
      newCategory,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const editorial = await this.editorialService.findAll();
    return res.status(HttpStatus.OK).json(editorial);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const editorial = await this.editorialService.findOne(id);
    return res.status(HttpStatus.OK).json({ editorial });
  }

  @Put(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() editorial: Editorial,
  ) {
    const updateEditorial = await this.editorialService.update(id, editorial);
    return res.status(HttpStatus.OK).json({ updateEditorial });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const removeEditorial = await this.editorialService.remove(id);
    return res.status(HttpStatus.OK).json({ removeEditorial });
  }
}
