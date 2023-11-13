import { Avatar, Box, IconButton, TableCell, Tooltip } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import React from 'react';
import type { Square as TSquare } from '@letsdosquares/core/types';
import styles from '../styles.module.scss';

export type SquareProps = TSquare & {
    disabled?: boolean;
    highlight?: boolean;
    onClick: (selected: TSquare) => void;
    picked?: string;
    selected?: boolean;
    trace?: boolean;
};

function stringToColor(val: string) {
    let hash = 0;
    let i;

    for (i = 0; i < val.length; i += 1) {
        hash = val.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
}

const stringAvatar = (val: string) => ({
    sx: {
        backgroundColor: stringToColor(val),
        height: 30,
        width: 30
    },
    children: `${val.split(' ')[0][0]}${val.split(' ')[1][0]}`
});

/**
 *
 * @param {SquareProps} props
 * @returns {JSX.Element}
 */
const Square: React.FC<SquareProps> = ({
    column,
    disabled = false,
    highlight = false,
    onClick,
    picked,
    row,
    selected = false,
    trace
}: SquareProps): JSX.Element => (
    <TableCell align="center" className={styles.square}>
        {picked && (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ cursor: 'pointer' }}
            >
                <Tooltip title={picked} arrow>
                    <Avatar {...stringAvatar(picked)} variant="rounded" />
                </Tooltip>
            </Box>
        )}
        {!picked && (
            <Tooltip
                title={selected ? 'Unselect this square' : 'Select this square'}
                arrow
            >
                <IconButton
                    disabled={disabled}
                    onClick={() => onClick({ column, row })}
                    color={selected ? 'success' : 'default'}
                >
                    {selected && <CheckCircleIcon />}
                    {!selected && !disabled && <AddCircleIcon />}
                    {disabled && <DoDisturbOnIcon />}
                </IconButton>
            </Tooltip>
        )}
    </TableCell>
);

export default React.memo(Square);
