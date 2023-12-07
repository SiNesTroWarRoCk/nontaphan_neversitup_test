import { Test, TestingModule } from '@nestjs/testing';
import { NeversitupController } from './neversitup.controller';

describe('NeversitupController', () => {
  let controller: NeversitupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeversitupController],
    }).compile();

    controller = module.get<NeversitupController>(NeversitupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
