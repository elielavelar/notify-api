import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiffusionService } from './diffusion.service';
import { CreateDiffusionDto } from './dto/create-diffusion.dto';
import { UpdateDiffusionDto } from './dto/update-diffusion.dto';

@Controller('diffusion')
export class DiffusionController {
  constructor(private readonly diffusionService: DiffusionService) {}

  @Post()
  create(@Body() createDiffusionDto: CreateDiffusionDto) {
    return this.diffusionService.create(createDiffusionDto);
  }

  @Get()
  findAll() {
    return this.diffusionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diffusionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiffusionDto: UpdateDiffusionDto) {
    return this.diffusionService.update(+id, updateDiffusionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diffusionService.remove(+id);
  }
}
