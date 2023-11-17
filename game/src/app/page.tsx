import { List, ListItem, Typography } from '@mui/material';

import Link from '@/components/link';

const Page = () => {
    const id = 456;

    return (
        <>
            <Typography variant="h2">Games</Typography>
            <List>
                <ListItem>
                    <Link href={`/game/${id}`}>Game {id}</Link>
                </ListItem>
            </List>
        </>
    );
};

export default Page;
