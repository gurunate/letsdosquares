import { League } from './league';

export interface Team {
    id?: string;
    name: string;
    abbreviation: string;
    team?: string;
    sport?: string;
    logo?: URL;
    league: League;
}
