import { sportingEvent } from '..';

describe('fixtures', () => {
    describe('sportingEvent', () => {
        it('should be valid', () => {
            const se = sportingEvent();
            expect(se.id).toBeDefined();
        });
    });
});
