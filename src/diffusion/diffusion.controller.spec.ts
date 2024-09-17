import { Test, TestingModule } from '@nestjs/testing';
import { DiffusionController } from './diffusion.controller';
import { DiffusionService } from './diffusion.service';

describe('DiffusionController', () => {
  let controller: DiffusionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiffusionController],
      providers: [DiffusionService],
    }).compile();

    controller = module.get<DiffusionController>(DiffusionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
