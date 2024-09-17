import { Test, TestingModule } from '@nestjs/testing';
import { DiffusionService } from './diffusion.service';

describe('DiffusionService', () => {
  let service: DiffusionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiffusionService],
    }).compile();

    service = module.get<DiffusionService>(DiffusionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
