import { Grid, Paper, Typography } from '@mui/material';

import React from 'react';
import { SportingEvent as TSportingEvent } from '@letsdosquares/core/types';
import { formatCurrency } from '@letsdosquares/core/utils';

export type InstructionsAndRulesProps = TSportingEvent & {
    limit: number;
    price: number;
};

/**
 * Instructions and Rules component.
 *
 * @param {InstructionsAndRulesProps} props
 * @returns {JSX.Element}
 */
const InstructionsAndRules: React.FC<InstructionsAndRulesProps> = ({
    awayTeam,
    homeTeam,
    limit,
    price
}: InstructionsAndRulesProps): JSX.Element => {
    const homeTeamScore = 17;
    const awayTeamScore = 14;

    return (
        <Grid container spacing={2} component={Paper}>
            <Grid item xs={12}>
                <Typography paragraph variant="h3">
                    Instructions and Rules
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography paragraph variant="h4">
                    Pick Your Squares
                </Typography>
                <ul>
                    <li>
                        <code>{formatCurrency(price)}</code> per square
                    </li>
                    <li>
                        Maximum <code>{limit}</code> squares per owner
                    </li>
                    <li>Board will be locked after the deadline</li>
                    <li>Game numbers will be shown after the deadline</li>
                </ul>
                <Typography paragraph variant="h4">
                    How to Win
                </Typography>
                <Typography paragraph>
                    Game numbers will be randomly generated and revealed after
                    all the squares are picked and the board is locked. They
                    will be displayed in the column and row heading boxes. Each
                    number represents the last number in the score of each team.
                </Typography>
                <Typography paragraph>
                    For example, if the 1<sup>st</sup> quarter ending score is{' '}
                    <strong>{awayTeam.name}</strong>{' '}
                    <code>{homeTeamScore}</code> and{' '}
                    <strong>{homeTeam.name}</strong>{' '}
                    <code>{awayTeamScore}</code>, then the winning square is the
                    one with a {awayTeam.name} number of{' '}
                    <code>{awayTeamScore.toString().substring(1)}</code>, and a{' '}
                    {homeTeam.name} number of{' '}
                    {homeTeamScore.toString().substring(1)}.
                </Typography>
                <Typography paragraph variant="h4">
                    Payouts
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography paragraph>
                    Price per square: <code>{formatCurrency(price)}</code>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {/* <Payouts pot={pot} /> */}
            </Grid>
        </Grid>
    );
};

export default InstructionsAndRules;
