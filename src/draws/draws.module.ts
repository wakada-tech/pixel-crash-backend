import { Module } from "@nestjs/common";
import { DrawsController } from "./draws.controller";

@Module({
  controllers: [DrawsController]
})
export class DrawsModule {}
