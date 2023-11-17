'use client';

import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import {
    SportingEvent as TSportingEvent,
    Square as TSquare
} from '@letsdosquares/core/types';

import Heading from './heading';
import React from 'react';
import Square from './square';
import styles from './styles.module.scss';

export type BoardProps = TSportingEvent & {
    limit?: number;
    onSelect?: (square: TSquare) => void;
};

const WIDTH = 10;

const picked: Record<string, string> = {
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
const Board: React.FC<BoardProps> = ({
    awayTeam,
    homeTeam,
    limit = 5,
    onSelect = () => null
}: BoardProps): JSX.Element => {
    const [selected, setSelected] = React.useState<Record<string, boolean>>({});

    const handlePick = React.useCallback(
        (square: TSquare) => {
            setSelected(prev => ({
                ...prev,
                [`${square.column},${square.row}`]:
                    !prev[`${square.column},${square.row}`]
            }));
            onSelect(square);
        },
        [onSelect]
    );

    return (
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={11}>
                <Typography
                    variant="h2"
                    component="div"
                    className={styles.homeTeam}
                >
                    {homeTeam?.name}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography
                    variant="h2"
                    component="div"
                    className={styles.awayTeam}
                >
                    {awayTeam?.name}
                </Typography>
            </Grid>
            <Grid item xs={11}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {Array.from(Array(WIDTH)).map((_, idx) => (
                                <Heading key={idx} number={idx} />
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.from(Array(WIDTH)).map((_, row) => (
                            <TableRow key={row}>
                                <Heading number={row} />
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
