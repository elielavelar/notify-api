import { Injectable } from '@nestjs/common';
import { CreateDiffusionDto } from './dto/create-diffusion.dto';
import { UpdateDiffusionDto } from './dto/update-diffusion.dto';
import { Diffusion, DiffusionDocument } from './schemas/difussion.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DiffusionService {
  constructor(
    @InjectModel(Diffusion.name)
    private readonly diffusionModel: Model<DiffusionDocument>,
  ) {}

  create(createDiffusionDto: CreateDiffusionDto) {
    console.log('Performing query: createDiffusionDto');
    console.table(createDiffusionDto);
    return 'This action adds a new diffusion';
  }

  findAll() {
    console.log('Performing query: findAll');
    return this.diffusionModel.find().exec();
  }

  findOne(id: string) {
    console.log('Performing query: findOne', id);
    //return this.diffusionModel.findOne().exec();
    return 'This action fetches a single diffusion';
  }

  update(id: string, updateDiffusionDto: UpdateDiffusionDto) {
    console.log('Performing query: update', id);
    console.table(updateDiffusionDto);
    return this.diffusionModel.findByIdAndUpdate(id, updateDiffusionDto);
    //return 'This action updates a single diffusion';
  }

  remove(id: string) {
    return `This action removes a #${id} diffusion`;
  }
}
