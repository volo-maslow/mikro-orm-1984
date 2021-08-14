import { UTC_NOW } from '../utils/sql-helpers';
import {
    BigIntType,
    Entity,
    PrimaryKey,
    Property
} from '@mikro-orm/core';

@Entity({ tableName: 'Organization' })
export class OrganizationEntity {

    @PrimaryKey({ type: BigIntType, columnType: 'bigint' })
    organizationId!: bigint;

    @Property({ length: 256 })
    name!: string;

    @Property({ length: 2048, nullable: true })
    description?: string;

    @Property({ defaultRaw: 'false' })
    isDeleted: boolean;

    @Property({ columnType: 'timestamp', defaultRaw: UTC_NOW })
    createdAt!: Date;
}
