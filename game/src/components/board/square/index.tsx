import { Avatar, Box, IconButton, TableCell, Tooltip } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import type { Square as TSquare } from '@/types/square';

// import classNames from 'classnames';
// import styles from './styles.module.scss';

export type SquareProps = TSquare & {
    disabled?: boolean;
    highlight: boolean;
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

function stringAvatar(val: string) {
    return {
        sx: {
            // alignSelf: 'center',
            backgroundColor: stringToColor(val),
            height: 30,
            width: 30
        },
        children: `${val.split(' ')[0][0]}${val.split(' ')[1][0]}`
    };
}

/**
 *
 * @param {SquareProps} props
 * @returns {JSX.Element}
 */
const Square: React.FC<SquareProps> = (props: SquareProps): JSX.Element => {
    const {
        column,
        disabled = false,
        highlight,
        onClick,
        picked,
        row,
        selected = false,
        trace
    } = props;

    const handleClick = ({ column, row }: TSquare) => {
        console.log('handleClick', { column, row });
        onClick({ column, row });
    };

    return (
        <>
            {picked && (
                <TableCell
                    align="justify"
                    // className={`${styles.spot} ${styles.picked}`}
                >
                    <Box display="flex" justifyContent="center">
                        <Tooltip title={picked} arrow>
                            <Avatar
                                {...stringAvatar(picked)}
                                variant="rounded"
                            />
                        </Tooltip>
                    </Box>
                </TableCell>
            )}

            {disabled && !selected && (
                <TableCell
                    align="center"
                    // className={`${styles.spot} ${styles.disabled}`}
                >
                    <Box
                        alignItems="center"
                        display="flex"
                        height="100%"
                        justifyContent="center"
                    >
                        <DoDisturbOnIcon />
                    </Box>
                </TableCell>
            )}

            {!picked && !disabled && (
                <TableCell
                    align="center"
                    // className={classNames(styles.spot, {
                    //     [styles.selected]: selected,
                    //     [styles.trace]: trace,
                    //     [styles.highlight]: highlight
                    // })}
                >
                    <IconButton
                        onClick={() => handleClick({ column, row })}
                        color={selected ? 'success' : 'default'}
                    >
                        {selected && <CheckCircleIcon />}
                        {!selected && <AddCircleIcon />}
                    </IconButton>
                </TableCell>
            )}
        </>
    );
};

export default Square;
