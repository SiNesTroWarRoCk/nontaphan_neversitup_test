import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NeversitupModule } from './neversitup/neversitup.module';
@Module({
    controllers: [AppController],
    imports: [
        NeversitupModule,
    ]
})
export class AppModule { }
