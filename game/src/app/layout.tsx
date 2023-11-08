import './globals.css';

import {
    AppBar,
    Box,
    Container,
    IconButton,
    Stack,
    Toolbar
} from '@mui/material';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Let's Do Squares",
    description:
        'Super Bowl squares is a common office pool or party game, and it is easy to play.'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppBar position="fixed" sx={{ zIndex: 2000 }}>
                    <Toolbar>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <IconButton href="/" component={Link}>
                                <MenuIcon />
                            </IconButton>
                            Let&apos;s Do Squares
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Container maxWidth="xl">
                    <Box p={2}>{children}</Box>
                </Container>
            </body>
        </html>
    );
}
