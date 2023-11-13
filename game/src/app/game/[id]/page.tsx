import * as fixtures from '@letsdosquares/core/fixtures';

import Game from '@/components/game';
import React from 'react';

const LIMIT = 5;
const PRICE = 3;

export default function Page() {
    const sportingEvent = fixtures.sportingEvent();

    return <Game {...sportingEvent} limit={LIMIT} price={PRICE} />;
}
