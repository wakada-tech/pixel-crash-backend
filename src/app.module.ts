import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrawsModule } from './draws/draws.module';

@Module({
  imports: [DrawsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
