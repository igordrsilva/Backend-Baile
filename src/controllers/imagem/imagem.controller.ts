/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { CreateImagemDto } from './dto/create-imagem.dto';

@Controller('imagem')
export class ImagemController {
  constructor(private readonly imagemService: ImagemService) { }

  @Post()
  create(@Body() createImagemDto: CreateImagemDto) {
    return this.imagemService.create(createImagemDto);
  }

  @Get()
  findAll() {
    return this.imagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.imagemService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagemService.remove(+id);
  }
}
