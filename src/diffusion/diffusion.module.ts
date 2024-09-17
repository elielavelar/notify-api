import { Module } from '@nestjs/common';
import { DiffusionService } from './diffusion.service';
import { DiffusionController } from './diffusion.controller';

@Module({
  controllers: [DiffusionController],
  providers: [DiffusionService],
})
export class DiffusionModule {}
