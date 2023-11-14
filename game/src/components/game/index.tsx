'use client';

import {
    SportingEvent as TSportingEvent,
    Square as TSquare
} from '@letsdosquares/core/types';

import Board from '@/components/board';
import BoxScore from '@/components/box-score';
import { Grid } from '@mui/material';
import InstructionsAndRules from '@/components/instructions-and-rules';
import React from 'react';
import Winners from '@/components/winners';

export type GameProps = TSportingEvent & {
    limit?: number;
    price?: number;
};

/**
 *
 * @param {GameProps} props
 * @returns {JSX.Element}
 */
const Game: React.FC<GameProps> = ({
    limit = 5,
    price = 3,
    ...sportingEvent
}: GameProps): JSX.Element => {
    const handlePick = React.useCallback((square: TSquare) => {
        console.log('handlePick', { square });
    }, []);

    return (
        <Grid container spacing={8}>
            <Grid item lg={8} container spacing={4}>
                <Grid item md={12}>
                    <Board
                        {...sportingEvent}
                        onPick={handlePick}
                        limit={limit}
                    />
                </Grid>
                <Grid item md={5}>
                    <BoxScore {...sportingEvent} />
                </Grid>
                <Grid item md={7}>
                    <Winners {...sportingEvent} />
                </Grid>
            </Grid>
            <Grid item lg={4}>
                <InstructionsAndRules
                    {...sportingEvent}
                    limit={limit}
                    price={price}
                />
            </Grid>
        </Grid>
    );
};

export default Game;
