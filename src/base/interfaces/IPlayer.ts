import { IPlayerStats } from "./IPlayerStats";

export interface IPlayer {
    id: number;
    accountId: number;
    participantId: number;
    name: string;
    stats: IPlayerStats;
}
