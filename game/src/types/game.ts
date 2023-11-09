import { SportingEvent } from './sporting-event';

export interface Game {
    id: number;
    title: string;
    sportingEvent: SportingEvent;
}
