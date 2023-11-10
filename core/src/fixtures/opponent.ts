import { Opponent as TOpponent } from '../types/opponent';
import { faker } from '@faker-js/faker';

export const opponent = (): TOpponent => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    team: faker.word.words(),
    sport: 'NFL'
});
