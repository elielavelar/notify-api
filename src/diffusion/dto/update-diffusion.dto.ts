import { PartialType } from '@nestjs/swagger';
import { CreateDiffusionDto } from './create-diffusion.dto';

export class UpdateDiffusionDto extends PartialType(CreateDiffusionDto) {}
