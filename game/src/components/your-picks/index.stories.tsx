import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta: Meta<typeof Component> = {
    title: 'Game / components / Your Picks',
    component: Component
};

export default meta;

export const YourPicks = {
    render: () => <Component />
} as StoryObj<typeof Component>;
