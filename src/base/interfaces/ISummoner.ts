import { IRankSet, IRecentGame } from "./index";

export interface ISummoner {
    id: number;
    accountId: number;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    ranked: IRankSet;
    recentGamesList: IRecentGame[];
}
