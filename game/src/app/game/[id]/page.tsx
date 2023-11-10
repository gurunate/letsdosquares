import * as fixtures from '@letsdosquares/core/fixtures';

import { Box, Grid, Paper } from '@mui/material';

import Board from '@/components/board';
import InstructionsAndRules from '@/components/instructions-and-rules';
import React from 'react';
import { Square as TSquare } from '@letsdosquares/core/types';
import Winners from '@/components/winners';

const LIMIT = 5;
const PRICE = 3;

export default function Page() {
    const handleClick = (square: TSquare) => {
        console.log({ square });
    };

    const sportingEvent = fixtures.sportingEvent();

    return (
        <Grid container spacing={4}>
            <Grid item lg={8}>
                <Board
                    {...sportingEvent}
                    // onClick={handleClick}
                    limit={LIMIT}
                />
            </Grid>
            <Grid item lg={4}>
                <InstructionsAndRules
                    {...sportingEvent}
                    limit={LIMIT}
                    price={PRICE}
                />
            </Grid>
            <Grid item lg={6}>
                <Winners {...sportingEvent} />
            </Grid>
        </Grid>
    );
}
