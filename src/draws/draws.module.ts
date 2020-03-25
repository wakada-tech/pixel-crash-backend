import { Module } from "@nestjs/common";
import { DrawsController } from "./draws.controller";
import { DatasetsMoudle } from "src/datasets/datasets.module";
import { DrawsService } from "./draws.service";
import { drawsProvider } from "./draws.provider";

@Module({
  imports: [DatasetsMoudle],
  controllers: [DrawsController],
  providers: [
    DrawsService,
    ...drawsProvider
  ]
})
export class DrawsModule {}
