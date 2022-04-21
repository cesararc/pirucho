import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Author } from 'src/schemas/author.schema';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Res() res, @Body() author: Author) {
    const newAuhtor = await this.authorService.create(author);
    return res.status(HttpStatus.CREATED).json({
      newAuhtor,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const authors = await this.authorService.findAll();
    return res.status(HttpStatus.OK).json({ authors });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const author = await this.authorService.findOne(id);
    return res.status(HttpStatus.OK).json({ author });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() author: Author) {
    const updateAuthor = await this.authorService.update(id, author);
    return res.status(HttpStatus.OK).json({ updateAuthor });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const removeBook = await this.authorService.remove(id);
    return res.status(HttpStatus.OK).json({ removeBook });
  }
}
