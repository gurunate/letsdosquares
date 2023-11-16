import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
    title: 'Game / components / Your Picks',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YourPicks: Story = {
    args: {
        loading: false,
        picks: 2,
        limit: 5,
        price: 5
    }
};
