import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';

// import { Card } from '@letsdosquares/ui-kit';
import React from 'react';
import { SportingEvent as TSportingEvent } from '@letsdosquares/core/types';
import { formatNumber } from '@letsdosquares/core/utils';

export type WinnerProps = TSportingEvent & unknown;

/**
 *
 * @param {WinnerProps} props
 * @returns {JSX.Element}
 */
const Winner: React.FC<WinnerProps> = ({
    homeTeam,
    awayTeam
}: WinnerProps): JSX.Element => (
    <Card variant="outlined">
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="center">Quarter</TableCell>
                    <TableCell align="center">
                        {homeTeam?.abbreviation}
                    </TableCell>
                    <TableCell align="center">
                        {awayTeam?.abbreviation}
                    </TableCell>
                    <TableCell align="center">Winner</TableCell>
                    <TableCell align="right">Payout</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell
                        align="center"
                        variant="head"
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {formatNumber(1, 'Oo')}
                    </TableCell>
                    <TableCell align="center">
                        <code>7</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>3</code>
                    </TableCell>
                    <TableCell align="left">Jen</TableCell>
                    <TableCell align="right">
                        <code>$20</code>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        align="center"
                        variant="head"
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {formatNumber(2, 'Oo')}
                    </TableCell>
                    <TableCell align="center">
                        <code>21</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>6</code>
                    </TableCell>
                    <TableCell align="left">Belle</TableCell>
                    <TableCell align="right">
                        <code>$20</code>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        align="center"
                        variant="head"
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {formatNumber(3, 'Oo')}
                    </TableCell>
                    <TableCell align="center">
                        <code>31</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>9</code>
                    </TableCell>
                    <TableCell align="left">Dennis</TableCell>
                    <TableCell align="right">
                        <code>$20</code>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        align="center"
                        variant="head"
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {formatNumber(4, 'Oo')}
                    </TableCell>
                    <TableCell align="center">
                        <code>31</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>9</code>
                    </TableCell>
                    <TableCell align="left">Dennis</TableCell>
                    <TableCell align="right">
                        <code>$40</code>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Card>
);

export default Winner;
