import { Test, TestingModule } from '@nestjs/testing';
import { NeversitupService } from './neversitup.service';

describe('NeversitupService', () => {
  let service: NeversitupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeversitupService],
    }).compile();

    service = module.get<NeversitupService>(NeversitupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
