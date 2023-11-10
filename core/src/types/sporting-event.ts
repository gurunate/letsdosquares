import { Location } from './location';
import { Opponent } from './opponent';

export interface SportingEvent {
    id: string;
    date: Date;
    sport: string;
    location: Location;
    homeTeam: Opponent;
    awayTeam: Opponent;
}
