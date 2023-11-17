import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import React from 'react';
import { formatCurrency } from '@letsdosquares/core/utils';

export type YourPicksProps = {
    loading?: boolean;
    picks: number;
    limit?: number;
    price: number;
};

/**
 *
 * @param {YourPicksProps} props
 * @returns {JSX.Element}
 */
const YourPicks: React.FC<YourPicksProps> = ({
    picks = 0,
    limit = 10,
    price = 1
}: YourPicksProps): JSX.Element => {
    const remaining = limit - picks;
    const due = picks * price || 0;

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h4">Number of Picks</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                        <code>{picks}</code>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h4">Remaining Picks</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                        <code>
                            {remaining} of {limit}
                        </code>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h4">Amount Due</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                        <code>{formatCurrency(due)}</code>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default YourPicks;
