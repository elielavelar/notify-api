import { Module } from '@nestjs/common';
import { DiffusionService } from './diffusion.service';
import { DiffusionController } from './diffusion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Diffusion, DiffusionSchema } from './schemas/difussion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Diffusion.name, schema: DiffusionSchema },
    ]),
  ],
  controllers: [DiffusionController],
  providers: [DiffusionService],
})
export class DiffusionModule {}
