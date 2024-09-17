import { Injectable } from '@nestjs/common';
import { CreateDiffusionDto } from './dto/create-diffusion.dto';
import { UpdateDiffusionDto } from './dto/update-diffusion.dto';

@Injectable()
export class DiffusionService {
  create(createDiffusionDto: CreateDiffusionDto) {
    return 'This action adds a new diffusion';
  }

  findAll() {
    return `This action returns all diffusion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diffusion`;
  }

  update(id: number, updateDiffusionDto: UpdateDiffusionDto) {
    return `This action updates a #${id} diffusion`;
  }

  remove(id: number) {
    return `This action removes a #${id} diffusion`;
  }
}
