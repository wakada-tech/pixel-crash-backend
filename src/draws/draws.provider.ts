import { Connection } from 'mongoose'
import { FactoryProvider } from '@nestjs/common'
import { drawsSchema } from './draws.schema'

export const drawsProvider: FactoryProvider[] = [
  {
    provide: 'DRAWS_MODEL',
    useFactory: (connect: Connection) => connect.model('draws', drawsSchema),
    inject: ['DATABASE_CONNECTION'],
  }
]
