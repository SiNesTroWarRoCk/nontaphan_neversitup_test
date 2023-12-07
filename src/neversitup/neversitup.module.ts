import { Module } from '@nestjs/common';
import { NeversitupController } from './neversitup.controller';
import { NeversitupService } from './neversitup.service';

@Module({
  controllers: [NeversitupController],
  providers: [NeversitupService]
})
export class NeversitupModule {}
