import { IPlayerStats, ITeam } from "../base/interfaces";

export const getKillParticipation = (team: ITeam, playerStats: IPlayerStats) => {
  const playerKA = playerStats.kills + playerStats.assists;

  if (team.kills > 0 && playerKA > 0) {
      return Math.round( (playerKA / team.kills) * 100 );
  }
  return 0;
};

export const getKDARatio = (playerStats: IPlayerStats) => {
  const playerKA = playerStats.kills + playerStats.assists;

  if (playerKA > 0 && playerStats.deaths === 0) {
      return "Perfect";
  }

  if (playerKA === 0) {
      return "0.00:1";
  }

  return (playerKA / playerStats.deaths).toFixed(2).toString() + ":1";
};

export const getGoldDisplay = (gold: number) => {
  if (gold < 1000) {
      return gold;
  }
  return (Math.round(gold / 1000));
};

export const getDamagePercentOfMax = (damage: number, maxDamage: number) => {
  if (maxDamage > 0 && damage > 0) {
      return (Math.round((damage / maxDamage) * 100));
  }
  return 0;
};