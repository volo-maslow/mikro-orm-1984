import config from './orm.config';
import faker from 'faker';
import _ from 'lodash';
import { EntityManager, MikroORM } from '@mikro-orm/core';
import { OrganizationEntity } from './entities/organization.entity';

const log = require('debug')('generator');

async function createOrganization(manager: EntityManager): Promise<OrganizationEntity> {

    const repository = manager.getRepository(OrganizationEntity);

    log('generating');

    const organization = repository.create({
        name: faker.company.companyName(),
        description: faker.datatype.boolean() ? faker.company.catchPhrase() : ''
    });

    log('generated');
    log('organization: ', organization);

    repository.persist(organization);

    return organization;
}

(async () => {

    log("app ready");

    const orm = await MikroORM.init(config);

    const organization = await createOrganization(orm.em);

    await orm.em.flush();

    log("app finished");
})().catch(console.error).finally(() => process.exit(0));
