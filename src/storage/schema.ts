import { appSchema, tableSchema } from "@nozbe/watermelondb";

export enum Tables {
  Client = 'client'
}

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: Tables.Client,
      columns: [
        { name: 'social_name', type: 'string'},
        // { name: columns.client.fantasyName, type: 'string'},
        // { name: columns.client.document, type: 'number'},
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