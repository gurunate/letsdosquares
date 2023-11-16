import { format as dateFnsFormat } from 'date-fns';
import { format as formatPhoneNumber } from 'phone-fns';
import numeral from 'numeral';

export const NUMBER_FORMAT_PATTERN = '1,1';
export const VALID_ZIP_CODE_PATTERN = /^\d{5}(?:[-\s]\d{4})?$/;
export const DATE_FORMAT_PATTERN = 'MMM d, yyyy';
export const PHONE_FORMAT_PATTERN = '(NNN) NNN-NNNN';
export const PHONE_MATCH_PATTERN =
    /^$|^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // empty (^$|) or phone number pattern
export const STANDARD_CURRENCY_FORMAT_PATTERN = '$1,1';
export const EXTENDED_CURRENCY_FORMAT_PATTERN = '$1,1.11';

/**
 * Currency formatter.
 *
 * @param {number | string} value
 * @param {string} pattern
 * @returns {number | string | undefined}
 */
export const formatCurrency = (
    value?: number | string,
    pattern?: string
): number | string | undefined => {
    if (value !== 0 && !value) {
        return value;
    }

    return numeral(value).format(pattern || STANDARD_CURRENCY_FORMAT_PATTERN);
};

/**
 * Number formatter.
 *
 * @param {number | string} value
 * @param {string} pattern
 * @returns {number | string | undefined}
 */
export const formatNumber = (
    value?: number | string,
    pattern?: string
): number | string | undefined => {
    if (!value) {
        return value;
    }

    return numeral(value).format(pattern || NUMBER_FORMAT_PATTERN);
};

/**
 * Phone number formatter.
 *
 * @param {number | string} value
 * @param {string} pattern
 * @returns {number | string | undefined}
 */
export const formatPhone = (
    value?: number | string,
    pattern?: string
): number | string | undefined => {
    if (!value) {
        return value;
    }

    return formatPhoneNumber(pattern || PHONE_FORMAT_PATTERN, value.toString());
};

/**
 * Returns the value in the ones position.
 *
 * @param {number | string} value
 * @returns {number | string | undefined}
 */
export const getLastDigit = (
    value?: number | string
): number | string | undefined => {
    if (!value) {
        return value;
    }

    return parseInt(String(value).slice(-1), 10);
};

/**
 * Date formatter.
 *
 * @param {string} value
 * @param {string} pattern
 * @returns {number | string | undefined}
 */
export const formatDate = (
    value?: string,
    pattern?: string
): number | string | undefined => {
    if (!value || isNaN(Date.parse(value))) {
        return value;
    }

    return dateFnsFormat(new Date(value), pattern || DATE_FORMAT_PATTERN);
};
