import { MultiKill, Role } from "../Enums";
import { IChampion, IFinalBuild, ISummonerSpells } from "./";

export interface IPlayerStats {
    kills: number;
    assists: number;
    deaths: number;
    level: number;
    cs: number;
    wards: number;
    controlWards: number;
    damage: number;
    gold: number;
    keystone: string;
    secondaryStyle: string;
    role: Role;
    mulitKill: MultiKill;
    champion: IChampion;
    summonerSpells: ISummonerSpells;
    finalBuild: IFinalBuild;
}
