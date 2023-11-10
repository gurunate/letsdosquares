import { Team as TTeam } from '../types/team';
import { faker } from '@faker-js/faker';

export const team = (): TTeam => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    team: faker.word.words(),
    sport: 'NFL'
});
