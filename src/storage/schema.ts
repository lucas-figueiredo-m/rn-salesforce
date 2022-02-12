import { appSchema, tableSchema } from "@nozbe/watermelondb";
import { ColumnClient } from "storage/Client";

export enum Tables {
  Client = 'client'
}

// TODO: Create the ClientColumns enum

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: Tables.Client,
      columns: [
        { name: ColumnClient.socialName, type: 'string'},
        // { name: columns.client.fantasyName, type: 'string'},
        { name: ColumnClient.document, type: 'string'},
        // { name: columns.client.address, type: 'number'},
        // { name: columns.client.number, type: 'string'},
        // { name: columns.client.complement, type: 'string'},
        // { name: columns.client.zipCode, type: 'number'},
        // { name: columns.client.phone, type: 'number'},
        { name: 'created_at', type: 'number'},
        { name: 'updated_at', type: 'number'}
      ]
    }),
  ]
})