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
import { formatNumber } from '@letsdosquares/core/utils';

export type BoxScoreProps = TSportingEvent & {
    loading?: boolean;
};

/**
 *
 * @param {BoxScoreProps} props
 * @returns {JSX.Element}
 */
const BoxScore: React.FC<BoxScoreProps> = ({
    awayTeam,
    homeTeam
}: BoxScoreProps): JSX.Element => (
    <Card variant="outlined">
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell />
                    {Array.from(Array(4)).map((_, idx) => (
                        <TableCell
                            key={idx}
                            align="center"
                            sx={{ textTransform: 'uppercase' }}
                        >
                            {formatNumber(idx + 1, 'Oo')}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>{awayTeam.abbreviation}</TableCell>
                    <TableCell align="center">
                        <code>7</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>10</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>10</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>13</code>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{homeTeam.abbreviation}</TableCell>
                    <TableCell align="center">
                        <code>3</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>9</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>16</code>
                    </TableCell>
                    <TableCell align="center">
                        <code>16</code>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Card>
);

export default BoxScore;
