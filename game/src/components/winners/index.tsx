import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';

import React from 'react';
import { SportingEvent as TSportingEvent } from '@letsdosquares/core/types';

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
                    <TableCell />
                    <TableCell align="center">{homeTeam?.name}</TableCell>
                    <TableCell align="center">{awayTeam?.name}</TableCell>
                    <TableCell align="center">Owner</TableCell>
                    <TableCell align="right">Payout</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell align="right" variant="head">
                        1<sup>st</sup> QTR
                    </TableCell>
                    <TableCell align="center">
                        <code>7</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>3</code>
                    </TableCell>
                    <TableCell align="center">Jen</TableCell>
                    <TableCell align="right">
                        <code>$20</code>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="right" variant="head">
                        2<sup>nd</sup> QTR
                    </TableCell>
                    <TableCell align="center">
                        <code>21</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>6</code>
                    </TableCell>
                    <TableCell align="center">Belle</TableCell>
                    <TableCell align="right">
                        <code>$20</code>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="right" variant="head">
                        3<sup>rd</sup> QTR
                    </TableCell>
                    <TableCell align="center">
                        <code>31</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>9</code>
                    </TableCell>
                    <TableCell align="center">Dennis</TableCell>
                    <TableCell align="right">
                        <code>$20</code>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="right" variant="head">
                        4<sup>th</sup> QTR
                    </TableCell>
                    <TableCell align="center">
                        <code>31</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>9</code>
                    </TableCell>
                    <TableCell align="center">Dennis</TableCell>
                    <TableCell align="right">
                        <code>$40</code>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Card>
);

export default Winner;
