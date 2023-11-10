import { SportingEvent as TSportingEvent } from '../types/sporting-event';
import { faker } from '@faker-js/faker';
import { location } from './location';
import { opponent } from './opponent';

export const sportingEvent = (): TSportingEvent => ({
    id: faker.string.uuid(),
    date: faker.date.anytime(),
    sport: 'NFL',
    location: location(),
    homeTeam: opponent(),
    awayTeam: opponent()
});
