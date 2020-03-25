import * as mongoose from 'mongoose'
import { FactoryProvider } from '@nestjs/common';

export const databaseProviders: FactoryProvider[] = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://jiangweixian:3AcRzoEI4TuXMcGQM1B8@ds019688.mlab.com:19688/draws'),
  },
];
