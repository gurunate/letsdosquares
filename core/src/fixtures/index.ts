export { location } from './location';

/**
 * Returns a randomized entry from the provided list.
 *
 * @param {string | any[]} list
 * @returns {unknown}
 */
export const randomized = (list: string | any[]): unknown =>
    list[Math.floor(Math.random() * (list.length - 0))];
