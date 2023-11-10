'use strict';

var faker = require('@faker-js/faker');

const location = () => ({
  id: faker.faker.string.uuid(),
  name: faker.faker.lorem.words(),
  city: faker.faker.location.city(),
  stateProvince: faker.faker.location.state(),
  country: faker.faker.location.county()
});

const randomized = (list) => list[Math.floor(Math.random() * (list.length - 0))];

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    randomized: randomized,
    location: location
});

exports.index = index;
exports.location = location;
exports.randomized = randomized;
//# sourceMappingURL=index-3c70f9c1.js.map
