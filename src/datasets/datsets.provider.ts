import * as mongoose from 'mongoose'
import { FactoryProvider } from '@nestjs/common';

export const databaseProviders: FactoryProvider[] = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://jiangweixian:saberwei520@ds019688.mlab.com:19688/draws'),
  },
];
