import { MatchType, Result } from "../enums";
import { IPlayerStats, ITeam } from "./index";

export interface IRecentGame {
    gameId: number;
    type: MatchType;
    matchDate: string;
    timeAgo: string;
    duration: string;
    result: Result;
    playerParticipantId: number;
    highestDamageToChampions: number;
    playerStats: IPlayerStats;
    playerTeam: ITeam;
    opponentTeam: ITeam;
}
