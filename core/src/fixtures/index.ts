export { location } from './location';
export { sportingEvent } from './sporting-event';
export { team } from './team';

/**
 * Returns a randomized entry from the provided list.
 *
 * @param {string | any[]} list
 * @returns {unknown}
 */
export const randomValueFromList = (list: string | any[]): unknown =>
    list[Math.floor(Math.random() * (list.length - 0))];
