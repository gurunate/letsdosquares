import { Team as TTeam } from "./team";

export interface Score {
  team: TTeam;
  results: [
    {
      period: number;
      periodType: string;
      score: number;
    }
  ];
}
