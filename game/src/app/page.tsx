import { List, ListItem, Typography } from '@mui/material';

import Link from '@/components/link';

export default function Home() {
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
}
