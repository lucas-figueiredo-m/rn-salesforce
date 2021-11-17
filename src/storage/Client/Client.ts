import { Model } from "@nozbe/watermelondb";
import { Tables } from 'storage/schema'
import { date, field, readonly } from "@nozbe/watermelondb/decorators";
import { columns, tables } from "storage";

// const ownColumns = columns.client

export class Client extends Model {
  static table = Tables.Client;

  @field ('social_name') socialName!: string

  // @text (ownColumns.fantasyName) fantasyName!: string

  // @text (ownColumns.document) document!: string

  // @text (ownColumns.address) address!: string

  // @text (ownColumns.number) number!: string

  // @text (ownColumns.complement) complement!: string

  // @text (ownColumns.zipCode) zipCode!: string

  // @text (ownColumns.phone) phone!: string

  @readonly @date('created_at') createdAt!: Date;

  @readonly @date('updated_at') updatedAt!: Date;

}