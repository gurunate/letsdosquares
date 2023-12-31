import { TableCell, Tooltip, Typography } from '@mui/material';

import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import { isEmpty } from 'lodash';

// import styles from './styles.module.scss';

export type HeadingProps = {
    number?: string | number;
};

/**
 *
 * @param {HeadingProps} props
 * @returns {JSX.Element}
 */
const Heading: React.FC<HeadingProps> = (props: HeadingProps): JSX.Element => {
    const { number } = props;
    return (
        <TableCell align="center">
            {isEmpty(number) && (
                <Tooltip title="Revealed later" arrow>
                    <HelpCenterOutlinedIcon />
                </Tooltip>
            )}
            {!isEmpty(number) && <Typography variant="h5">{number}</Typography>}
        </TableCell>
    );
};

export default Heading;
