import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { Client } from 'storage/Client/Client'

import { schema } from 'storage/schema'

import migrations from './migrations'

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: error => {
    console.warn('Error: ', error)
  }
})

export const database = new Database({
  adapter,
  modelClasses: [Client]
  // actionsEnabled: true
})

if (__DEV__) {
  // Import connectDatabases function and required DBDrivers
  const { connectDatabases, WatermelonDB } = require('react-native-flipper-databases')

  connectDatabases([
    new WatermelonDB(database) // Pass in database definition
  ])
}
