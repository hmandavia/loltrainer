import { Divisions, Tiers } from "../enums";

export interface IRank {
    tier: Tiers;
    division: Divisions;
    leaguePoints: string;
}
