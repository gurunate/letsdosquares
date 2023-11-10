'use strict';

var faker = require('@faker-js/faker');

const location = () => ({
  id: faker.faker.string.uuid(),
  name: faker.faker.lorem.words(),
  city: faker.faker.location.city(),
  stateProvince: faker.faker.location.state(),
  country: faker.faker.location.county()
});

const team = () => ({
  id: faker.faker.string.uuid(),
  name: faker.faker.company.name(),
  team: faker.faker.word.words(),
  sport: "NFL"
});

const sportingEvent = () => ({
  id: faker.faker.string.uuid(),
  date: faker.faker.date.anytime(),
  sport: "NFL",
  location: location(),
  homeTeam: team(),
  awayTeam: team()
});

const randomized = (list) => list[Math.floor(Math.random() * (list.length - 0))];

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    randomized: randomized,
    location: location,
    sportingEvent: sportingEvent,
    opponent: team
});

exports.index = index;
exports.location = location;
exports.randomized = randomized;
exports.sportingEvent = sportingEvent;
exports.team = team;
//# sourceMappingURL=index-aa9bb1a4.js.map
