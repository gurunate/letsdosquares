import Link from '@/components/link';
import { Typography } from '@mui/material';

export default function Home() {
    const id = 456;

    return (
        <>
            <Typography variant="h2">Let&apos;s Do Squares</Typography>
            <Link href={`/game/${id}`}>Game {id}</Link>
        </>
    );
}
