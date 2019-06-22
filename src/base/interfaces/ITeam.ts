import { Result } from "../enums";
import { IPlayer } from "./index";

export interface ITeam {
    kills: number;
    assists: number;
    deaths: number;
    dragons: number;
    barons: number;
    turrets: number;
    result: Result;
    players: IPlayer[];
}
