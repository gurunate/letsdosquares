'use client';

import {
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

import Heading from './heading';
import React from 'react';
import Square from './square';
import { Square as TSquare } from '@/types/square';

export type BoardProps = unknown;

const WIDTH = 10;

const picked = {
    '0,2': 'Nate Johnson',
    '3,8': 'Nate Johnson',
    '1,2': 'Annabelle Johnson',
    '3,5': 'Lilia Johnson',
    '8,7': 'Dee Johnson'
};

/**
 * Game Board component.
 *
 * @param {BoardProps} props
 * @returns {JSX.Element}
 */
const Board: React.FC<BoardProps> = (props: BoardProps): JSX.Element => {
    const [selected, setSelected] = React.useState({});

    const handlePick = ({ column, row }: TSquare) => {
        setSelected({
            ...selected,
            [`${column},${row}`]: !selected[`${column},${row}`]
        });
    };

    const limit = 5;
    const homeTeam = 'teamA';
    const awayTeam = 'teamB';

    return (
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={11}>
                <Box
                // className={styles.teamA}
                >
                    <Typography variant="h4" align="center" p={2}>
                        {homeTeam}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={1}>
                <Box
                    display="flex"
                    // className={styles.teamB}
                    sx={{ height: '830px' }}
                >
                    <Typography variant="h4" align="center" p={2}>
                        {awayTeam}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={11}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell
                            // className={styles.cell}
                            />
                            {Array.from(Array(WIDTH)).map((_, index) => (
                                <Heading
                                    key={index}
                                    // number={index}
                                />
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.from(Array(WIDTH)).map((_, row) => (
                            <TableRow key={row}>
                                <Heading
                                // number={row}
                                />
                                {Array.from(Array(WIDTH)).map((_, col) => {
                                    const spot = `${col}x${row}`;
                                    const disabled =
                                        !selected[`${col},${row}`] &&
                                        !picked[`${col},${row}`] &&
                                        Object.values(selected).filter(v => v)
                                            .length >= limit;

                                    return (
                                        <Square
                                            picked={picked[`${col},${row}`]}
                                            disabled={disabled}
                                            column={col}
                                            key={spot}
                                            onClick={handlePick}
                                            row={row}
                                            selected={selected[`${col},${row}`]}
                                        />
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
};

export default Board;
