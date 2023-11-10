import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

import React from 'react';
import { formatCurrency } from '@letsdosquares/core/utils';

export type PayoutsProps = {
    pot: number;
};

/**
 *
 * @param {PayoutsProps} props
 * @returns {JSX.Element}
 */
const Payouts: React.FC<PayoutsProps> = ({
    pot
}: PayoutsProps): JSX.Element => (
    <Table aria-label="payouts table">
        <TableHead>
            <TableRow>
                <TableCell />
                <TableCell align="right">
                    <Typography variant="h6">Pct.</Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="h6">Total</Typography>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>
                    <Typography variant="h6">
                        1<sup>st</sup> Quarter
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <code>20%</code>
                </TableCell>
                <TableCell align="right">
                    <code>{formatCurrency(pot * 0.2)}</code>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant="h6">
                        2<sup>nd</sup> Quarter
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <code>20%</code>
                </TableCell>
                <TableCell align="right">
                    <code>{formatCurrency(pot * 0.2)}</code>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant="h6">
                        3<sup>rd</sup> Quarter
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <code>20%</code>
                </TableCell>
                <TableCell align="right">
                    <code>{formatCurrency(pot * 0.2)}</code>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant="h6">End of Game</Typography>
                </TableCell>
                <TableCell align="right">
                    <code>40%</code>
                </TableCell>
                <TableCell align="right">
                    <code>{formatCurrency(pot * 0.4)}</code>
                </TableCell>
            </TableRow>
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={2} align="right">
                    <Typography variant="h6">Total Pot</Typography>
                </TableCell>
                <TableCell align="right">
                    <Box
                        sx={{
                            fontFamily: 'Monospace',
                            fontWeight: 'bold'
                        }}
                    >
                        {formatCurrency(pot)}
                    </Box>
                </TableCell>
            </TableRow>
        </TableFooter>
    </Table>
);

export default Payouts;
