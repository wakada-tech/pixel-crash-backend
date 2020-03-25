import { Module } from "@nestjs/common";
import { databaseProviders } from './datsets.provider'

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatasetsMoudle {}