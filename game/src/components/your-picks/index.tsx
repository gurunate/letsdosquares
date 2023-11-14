import { Card, CardContent, CardHeader } from '@mui/material';

import React from 'react';

export type YourPicksProps = {
    loading?: boolean;
};

/**
 *
 * @param {YourPicksProps} props
 * @returns {JSX.Element}
 */
const YourPicks: React.FC<YourPicksProps> = (
    props: YourPicksProps
): JSX.Element => (
    <Card>
        <CardHeader title="Your Picks" />
        <CardContent>YourPicks</CardContent>
    </Card>
);

export default YourPicks;
