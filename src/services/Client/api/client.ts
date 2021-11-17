import type {Client, ClientWithoutId} from 'models';
import type {ClientService} from '../typings';
import {Client as ClientDB, Tables} from 'storage';
import {database, tables} from 'storage';

export const createClientService = (): ClientService => ({
  async list(): Promise<Client[]> {
    const entries = await database.get<ClientDB>(Tables.Client).query().fetch();
    if (entries.length) {
      return entries.map<Client>((entry) => ({
        id: entry.id,
        socialName: entry.socialName,
        // fantasyName: entry.fantasyName,
        // document: entry.document,
        // address: entry.address,
        // number: entry.number,
        // complement: entry.complement,
        // zipCode: entry.zipCode,
        // phone: entry.phone
      }));
    }
    return [];
  },
  async get(id: Client['id']): Promise<Client> {
    const entry = await database.get<ClientDB>(Tables.Client).find(String(id));
    const formattedEntry: Client = {
      id: entry.id,
      socialName: entry.socialName,
      // fantasyName: entry.fantasyName,
      // document: entry.document,
      // address: entry.address,
      // number: entry.number,
      // complement: entry.complement,
      // zipCode: entry.zipCode,
      // phone: entry.phone
    };
    return formattedEntry;
  },
  async create(client: ClientWithoutId): Promise<Client> {
    const entry: ClientDB = await database.get<ClientDB>(Tables.Client).create((newEntry) => {
      newEntry.socialName = client.socialName;
      // newEntry.fantasyName = client.fantasyName;
      // newEntry.document = client.document;
      // newEntry.address = client.address;
      // newEntry.number = client.number;
      // newEntry.complement = client.complement;
      // newEntry.zipCode = client.zipCode;
      // newEntry.phone = client.phone;
    });
    // await database.action(async () => {
      
    // });
    const formattedEntry: Client = {
      id: entry.id,
      socialName: entry.socialName,
      // fantasyName: entry.fantasyName,
      // document: entry.document,
      // address: entry.address,
      // number: entry.number,
      // complement: entry.complement,
      // zipCode: entry.zipCode,
      // phone: entry.phone
    };
    return formattedEntry;
  },
  async update(client: Client): Promise<Client> {
    const entry: ClientDB = await database.get<ClientDB>(Tables.Client).find(String(client.id));
    await entry.update((updatedEntry) => {
      updatedEntry.socialName = client.socialName;
      // updatedEntry.fantasyName = client.fantasyName;
      // updatedEntry.document = client.document;
      // updatedEntry.address = client.address;
      // updatedEntry.number = client.number;
      // updatedEntry.complement = client.complement;
      // updatedEntry.zipCode = client.zipCode;
      // updatedEntry.phone = client.phone;
    });
    // await database.action(async () => {
    //   entry = a
    // });
    const formattedEntry: Client = {
      id: entry.id,
      socialName: entry.socialName,
      // fantasyName: entry.fantasyName,
      // document: entry.document,
      // address: entry.address,
      // number: entry.number,
      // complement: entry.complement,
      // zipCode: entry.zipCode,
      // phone: entry.phone
    };
    return formattedEntry;
  },
  async delete(id: Client['id']): Promise<void> {
    const entry = await database.get<ClientDB>(Tables.Client).find(String(id));
    await entry.destroyPermanently();
    // await database.action(async () => {
      
    // });
  },
});