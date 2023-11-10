export { location } from './location';
export { sportingEvent } from './sporting-event';
export { opponent } from './opponent';

/**
 * Returns a randomized entry from the provided list.
 *
 * @param {string | any[]} list
 * @returns {unknown}
 */
export const randomized = (list: string | any[]): unknown =>
    list[Math.floor(Math.random() * (list.length - 0))];
