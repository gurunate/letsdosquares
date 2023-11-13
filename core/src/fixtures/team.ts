import { League as TLeague, Team as TTeam } from '../types';

import { faker } from '@faker-js/faker';

export const team = (): TTeam => {
    const name = faker.company.name();

    return {
        id: faker.string.uuid(),
        name,
        abbreviation: name.substring(0, 3).toUpperCase(),
        team: faker.word.words(),
        league: TLeague.NFL
    };
};
