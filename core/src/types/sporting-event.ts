import { Location } from './location';
import { Team } from './team';

export interface SportingEvent {
    id: string;
    date: Date;
    sport: string;
    location: Location;
    homeTeam: Team;
    awayTeam: Team;
}
