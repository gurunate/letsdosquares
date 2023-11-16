import { describe, expect } from '@jest/globals';
import { formatCurrency, formatDate, formatPhone } from '..';

describe('utils', () => {
    describe('formatCurrency', () => {
        it('should format currency', () => {
            expect(formatCurrency(1)).toBe('$1');
            expect(formatCurrency(11)).toBe('$11');
            expect(formatCurrency(111)).toBe('$111');
            expect(formatCurrency(1111)).toBe('$1,111');
            expect(formatCurrency(555.1)).toBe('$555');
            expect(formatCurrency(66123.56)).toBe('$66,124');
        });
    });

    describe('formatPhone', () => {
        it('should format phone number', () => {
            expect(formatPhone(5556667777)).toBe('(555) 666-7777');
            expect(formatPhone('312-867-5309')).toBe('(312) 867-5309');
            expect(formatPhone('(847)123-45667')).toBe('(847) 123-4566');
            expect(formatPhone('773.987.6574')).toBe('(773) 987-6574');
        });
    });

    describe('formatDate', () => {
        it('should format date', () => {
            expect(formatDate('2022-02-12T15:30:32.723Z')).toBe('Feb 12, 2022');
            expect(formatDate('12/25/1999')).toBe('Dec 25, 1999');
            expect(formatDate('02-02-2022')).toBe('Feb 2, 2022');
        });

        it('should support a pattern override', () => {
            const testDate = '2013-03-09T15:30:32.723Z';
            expect(formatDate(testDate, 'MM/dd/yyyy')).toBe('03/09/2013');
            expect(formatDate(testDate, 'EEEE, MMMM do')).toBe(
                'Saturday, March 9th'
            );
        });
    });
});
