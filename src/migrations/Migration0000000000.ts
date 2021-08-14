import { Migration } from '@mikro-orm/migrations';

export class Migration0000000000 extends Migration {

  async up(): Promise<void> {
      this.addSql('create extension if not exists "uuid-ossp";');
  }

}
