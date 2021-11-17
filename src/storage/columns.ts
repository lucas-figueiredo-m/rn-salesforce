import { columnName } from "@nozbe/watermelondb";

export const columns = {
  client: {
    socialName: columnName('social_name'),
    // fantasyName: columnName('fantasy_name'),
    // document: columnName('document'),
    // phone: columnName('phone'),
    // address: columnName('address'),
    // number: columnName('number'),
    // complement: columnName('complement'),
    // zipCode: columnName('zip_code'),
    createdAt: columnName('created_at'),
    updatedAt: columnName('updated_at')
  }
}