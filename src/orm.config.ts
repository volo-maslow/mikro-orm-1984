import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { EntityCaseNamingStrategy } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Configuration, Options } from '@mikro-orm/core/utils';

const config : Options<PostgreSqlDriver> | Configuration<PostgreSqlDriver> = {
    entities: ['src/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    metadataProvider: TsMorphMetadataProvider,
    namingStrategy: EntityCaseNamingStrategy,
    type: 'postgresql',
    dbName: 'db',
    user: 'user',
    password: '12345678',
    host: 'localhost',
    port: 5432,
    discovery: {
        warnWhenNoEntities: true,
    },
    migrations: {
        tableName: '_Migrations',
        path: process.cwd() + '/src/migrations',
        transactional: true,
        allOrNothing: true,
        emit: 'ts',
    },
    validate: true,
    strict: true,
    forceUtcTimezone: true,
    debug: true,
    logger: (message: string) => console.log(message),
};

export default config;
