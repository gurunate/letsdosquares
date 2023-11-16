import {
    Collapse,
    Grid,
    IconButton,
    Stack,
    Tooltip,
    Typography
} from '@mui/material';
import { formatCurrency, getTenth } from '@letsdosquares/core/utils';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Payouts from '@/components/payouts';
import React from 'react';
import { SportingEvent as TSportingEvent } from '@letsdosquares/core/types';

export type InstructionsAndRulesProps = TSportingEvent & {
    collapse?: boolean;
    limit: number;
    loading?: boolean;
    price: number;
};

/**
 * Instructions and Rules component.
 *
 * @param {InstructionsAndRulesProps} props
 * @returns {JSX.Element}
 */
const InstructionsAndRules: React.FC<InstructionsAndRulesProps> = ({
    awayTeam,
    // collapse = false,
    homeTeam,
    limit,
    loading = false,
    price
}: InstructionsAndRulesProps): JSX.Element => {
    const homeTeamScore = 17;
    const awayTeamScore = 23;

    const [collapse, setCollapse] = React.useState(false);

    const toggleCollapse = () => {
        setCollapse(prev => {
            const current = !prev;
            // onToggleCollapse && onToggleCollapse(current);
            return current;
        });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Stack
                    direction="row"
                    alignItems="center"
                    onClick={toggleCollapse}
                    sx={{ cursor: 'pointer' }}
                >
                    <Tooltip title={collapse ? 'expand' : 'collapse'}>
                        <IconButton>
                            {!collapse && <ArrowDropDownIcon />}
                            {collapse && <ArrowRightIcon />}
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h3">Instructions and Rules</Typography>
                </Stack>
            </Grid>

            <Grid item xs={12}>
                <Collapse in={!collapse} timeout="auto" unmountOnExit>
                    <Typography variant="h4">Pick Your Squares</Typography>
                    <ul>
                        <li>
                            <code>{formatCurrency(price)}</code> per square
                        </li>
                        <li>
                            Maximum <code>{limit}</code> squares per owner
                        </li>
                        <li>Board will be locked after the deadline</li>
                        <li>Game numbers will be shown after the deadline</li>
                    </ul>
                    <Typography variant="h4">How to Win</Typography>
                    <Typography paragraph>
                        Board game numbers will be randomly selected and
                        revealed after all the squares are picked and the board
                        is locked. The numbers will be displayed in the column
                        and row heading. Each number represents the last number
                        in the score of each team.
                    </Typography>
                    <Typography paragraph>
                        For example, if the 1<sup>st</sup> quarter ending score
                        for <em>{awayTeam.name}</em> ({awayTeam.abbreviation})
                        is <code>{homeTeamScore}</code> and{' '}
                        <em>{homeTeam.name}</em> ({homeTeam.abbreviation}) is{' '}
                        <code>{awayTeamScore}</code>, then the winning square is
                        the one with a <em>{awayTeam.name}</em> number of{' '}
                        <code>{getTenth(homeTeamScore)}</code>, and a{' '}
                        <em>{homeTeam.name}</em> number of{' '}
                        {getTenth(awayTeamScore)}.
                    </Typography>
                    <Typography paragraph variant="h4">
                        Payouts
                    </Typography>
                    <Typography paragraph>
                        Price per square: <code>{formatCurrency(price)}</code>
                    </Typography>
                    <Payouts pot={price * 100} />
                </Collapse>
            </Grid>
        </Grid>
    );
};

export default InstructionsAndRules;
