import { Location as TLocation } from '../types/location';
import { faker } from '@faker-js/faker';

export const location = (): TLocation => ({
    id: faker.string.uuid(),
    name: faker.lorem.words(),
    city: faker.location.city(),
    stateProvince: faker.location.state(),
    country: faker.location.county()
});
