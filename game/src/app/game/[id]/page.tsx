import { Box, Grid, Paper } from '@mui/material';

import Board from '@/components/board';
import React from 'react';
import { Square as TSquare } from '@/types/square';
import Winners from '@/components/board/winners';

const LIMIT = 5;
const PRICE = 3;
const TEAM_A = 'Tampa Bay';
const TEAM_B = 'KC';

export default function Page() {
    const handleClick = (square: TSquare) => {
        console.log({ square });
    };

    return (
        <Grid container spacing={4}>
            <Grid item lg={8}>
                <Board
                // onClick={handleClick}
                // limit={LIMIT}
                // teamA={TEAM_A}
                // teamB={TEAM_B}
                />
            </Grid>
            <Grid item lg={6}>
                <Winners
                    homeTeam={{ name: TEAM_A }}
                    awayTeam={{ name: TEAM_B }}
                    id={0}
                    date={undefined}
                    sport={''}
                    location={undefined}
                />
            </Grid>
            <Grid item lg={4}>
                <Box m={4}>
                    <Paper>
                        InstructionsAndRules
                        {/* <InstructionsAndRules
                    limit={LIMIT}
                    price={PRICE}
                    teamA={TEAM_A}
                    teamB={TEAM_B}
                /> */}
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
}
