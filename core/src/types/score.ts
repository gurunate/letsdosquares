import { Team as TTeam } from "./team";

export interface Score {
  team: TTeam;
  quarter1?: number;
  quarter2?: number;
  quarter3?: number;
  quarter4?: number;
}
