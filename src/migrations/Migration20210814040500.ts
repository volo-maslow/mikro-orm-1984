import { Migration } from '@mikro-orm/migrations';

export class Migration20210814040500 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Organization" ("organizationId" bigserial primary key, "name" varchar(256) not null, "description" varchar(2048) null, "isDeleted" bool not null default false, "createdAt" timestamp not null default timezone(\'utc\', now()));');
  }

}
