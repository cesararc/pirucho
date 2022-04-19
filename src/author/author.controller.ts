import {
  Controller,
  // Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Author } from 'src/schemas/author.schema';
import { AuthorService } from './author.service';
// import { CreateAuthorDto } from './dto/create-author.dto';
// import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Res() response, @Body() author: Author) {
    const newAuhtor = await this.authorService.create(author);
    return response.status(HttpStatus.CREATED).json({
      newAuhtor,
    });
  }

  // @Get()
  // findAll() {
  //   return this.authorService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authorService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
  //   return this.authorService.update(+id, updateAuthorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authorService.remove(+id);
  // }
}
