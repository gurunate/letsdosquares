import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { fixtures } from '@letsdosquares/core';

const meta = {
    title: 'Game / components / Instructions And Rules',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const sportingEvent = fixtures.sportingEvent();

export const InstructionsAndRules: Story = {
    args: {
        loading: false,
        collapsed: false,
        limit: 10,
        price: 5,
        ...sportingEvent
    }
};
