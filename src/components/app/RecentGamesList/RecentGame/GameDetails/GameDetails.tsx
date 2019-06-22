import * as React from "react";

import { Result } from "../../../../../base/enums";
import { IPlayerStats, ITeam } from "../../../../../base/interfaces";
import { getKDARatio, getKillParticipation } from "../../../../../services/matchDetailsService";
import { getGameDetailColor } from "../../../../../services/themeService";

import { ItemBuild } from "../../../../../components/app/ItemBuild";
import { KeystoneRunes } from "../../../../../components/app/KeystoneRunes";
import { SummonerSpells } from "../../../../../components/app/SummonerSpells";

import {
  ChampionIcon,
  Container,
  KDAText,
  ParticipationText,
  RatioText,
  StatsSection,
  StatsText
} from "./GameDetails.styled";

export interface IGameDetailsProps {
  result: Result;
  playerStats: IPlayerStats;
  playerTeam: ITeam;
}

export const GameDetails = (props: IGameDetailsProps) => {
  const { result, playerStats, playerTeam } = props;

  const killParticipation = getKillParticipation(playerTeam, playerStats);
  const kdaRatio = getKDARatio(playerStats);

  return (
    <Container
      backgroundColor={getGameDetailColor(result)}
    >
      <ChampionIcon source={{ uri: playerStats.champion.iconUrl }} />
      <SummonerSpells
        spell1={playerStats.summonerSpells.spell1}
        spell2={playerStats.summonerSpells.spell2}
        size={25}
      />
      <KeystoneRunes
        keystone={playerStats.keystone}
        keystoneSize={30}
        secondaryStyle={playerStats.secondaryStyle}
        secondarySize={15}
      />
      <StatsSection>
        <KDAText>{playerStats.kills} / {playerStats.deaths} / {playerStats.assists}</KDAText>
        <RatioText>{kdaRatio}</RatioText>
      </StatsSection>
      <StatsSection>
        <StatsText>Lvl {playerStats.level}</StatsText>
        <StatsText>{playerStats.cs} CS</StatsText>
        <ParticipationText>P/Kill {killParticipation}%</ParticipationText>
      </StatsSection>
      <ItemBuild
        finalBuild={playerStats.finalBuild}
      />
    </Container>
  );
};
