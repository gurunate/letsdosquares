import {
    EXTENDED_CURRENCY_FORMAT_PATTERN,
    formatCurrency,
    formatDate,
    formatNumber,
    formatPhone,
    getLastDigit
} from '..';

describe('utils', () => {
    describe('formatCurrency', () => {
        it('should ignore an undefined value', () => {
            expect(formatCurrency(undefined)).toBe(undefined);
        });

        it('should format currency', () => {
            expect(formatCurrency(0)).toBe('$0');
            expect(formatCurrency('0')).toBe('$0');
            expect(formatCurrency(1)).toBe('$1');
            expect(formatCurrency(11)).toBe('$11');
            expect(formatCurrency(111)).toBe('$111');
            expect(formatCurrency(1111)).toBe('$1,111');
            expect(formatCurrency(555.1)).toBe('$555');
            expect(formatCurrency(66123.56)).toBe('$66,124');
            expect(
                formatCurrency(123456.78, EXTENDED_CURRENCY_FORMAT_PATTERN)
            ).toBe('$123,456.78');
        });
    });

    describe('formatNumber', () => {
        it('should ignore an undefined value', () => {
            expect(formatNumber(undefined)).toBe(undefined);
        });

        it('should format number', () => {
            expect(formatNumber(1000)).toBe('1,000');
            expect(formatNumber(3200100)).toBe('3,200,100');
            expect(formatNumber(1.1)).toBe('1');
        });
    });

    describe('getLastDigit', () => {
        it('should ignore an undefined value', () => {
            expect(getLastDigit(undefined)).toBe(undefined);
        });

        it('should return number in ones position', () => {
            expect(getLastDigit(0)).toBe(0);
            expect(getLastDigit(7)).toBe(7);
            expect(getLastDigit(13)).toBe(3);
            expect(getLastDigit(144)).toBe(4);
        });
    });

    describe('formatPhone', () => {
        it('should ignore an undefined value', () => {
            expect(formatPhone(undefined)).toBe(undefined);
        });

        it('should format phone number', () => {
            expect(formatPhone(5556667777)).toBe('(555) 666-7777');
            expect(formatPhone('312-867-5309')).toBe('(312) 867-5309');
            expect(formatPhone('(847)123-45667')).toBe('(847) 123-4566');
            expect(formatPhone('773.987.6574')).toBe('(773) 987-6574');
        });
    });

    describe('formatDate', () => {
        it('should ignore an undefined value', () => {
            expect(formatDate(undefined)).toBe(undefined);
        });

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
