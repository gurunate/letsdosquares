import { Location } from './location';
import { Opponent } from './opponent';

export interface SportingEvent {
    EventID: number;
    Date: Date;
    Sport: string;
    Location: Location;
    HomeTeam: Opponent;
    AwayTeam: Opponent;
}
