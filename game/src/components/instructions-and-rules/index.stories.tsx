import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { League } from '@letsdosquares/core/types';

const meta = {
    title: 'Game / components / Instructions And Rules',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InstructionsAndRules: Story = {
    args: {
        loading: false,
        collapse: false,
        limit: 10,
        price: 5,
        homeTeam: {
            name: 'Kansas City',
            abbreviation: 'KC',
            league: League.NFL
        },
        awayTeam: {
            name: 'Tampa Bay',
            abbreviation: 'TB',
            league: League.NFL
        }
    }
};
