import { SportingEvent } from './sporting-event';

export interface Game {
    id: string;
    title: string;
    sportingEvent: SportingEvent;
}
