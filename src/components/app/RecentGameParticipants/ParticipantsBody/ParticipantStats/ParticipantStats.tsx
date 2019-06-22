import * as React from "react";

import { IPlayer } from "../../../../../base/interfaces";
import { getDamagePercentOfMax, getGoldDisplay, getKDARatio } from "../../../../../services/matchDetailsService";
import { getChampionIconUrl } from "../../../../../services/staticDataService";
import { getParticipantBackgroundColor } from "../../../../../services/themeService";

import { ItemBuild } from "../../../ItemBuild";
import { KeystoneRunes } from "../../../KeystoneRunes";
import { SummonerSpells } from "../../../SummonerSpells";

import { StaticProgressBar } from "../../../../common";

import {
  ChampionIcon,
  Container,
  CSGText,
  DamageMeterContainer,
  KDAText,
  NameText,
  PerformanceContainer,
  RatioText,
  StatsSection
} from "./ParticipantStats.styled";

export interface IParticipantStatsProps {
  player: IPlayer;
  highestDamageToChampions: number;
  isSelectedPlayer: boolean;
};

export const ParticipantStats = (props: IParticipantStatsProps) => {
  const { name, stats } = props.player;
  const championIconUrl = getChampionIconUrl(stats.champion.name);
  const kdaRatio = getKDARatio(stats);
  const gold = getGoldDisplay(stats.gold);
  const dmgPercent = getDamagePercentOfMax(stats.damage, props.highestDamageToChampions);

  return (
    <Container backgroundColor={getParticipantBackgroundColor(props.isSelectedPlayer)}>
        <ChampionIcon source={{ uri: championIconUrl }} />
        <SummonerSpells
            spell1={stats.summonerSpells.spell1}
            spell2={stats.summonerSpells.spell2}
            size={15}
        />
        <KeystoneRunes
            keystone={stats.keystone}
            keystoneSize={25}
            secondaryStyle={stats.secondaryStyle}
            secondarySize={15}
        />
        <StatsSection>
            <NameText>{name}</NameText>
            <KDAText>{stats.kills} / {stats.deaths} / {stats.assists}</KDAText>
            <RatioText>{kdaRatio}</RatioText>
        </StatsSection>
        <StatsSection>
            <ItemBuild
                finalBuild={stats.finalBuild}
                isRow={ false }
            />
            <PerformanceContainer>
                <CSGText>{stats.cs} / {gold}K</CSGText>
                <DamageMeterContainer>
                    <StaticProgressBar
                        progress={dmgPercent}
                        backgroundText={stats.damage.toString()}
                    />
                </DamageMeterContainer>
            </PerformanceContainer>
            {/* <KDAText>{stats.cs} / {gold}K / {stats.damage}</KDAText> */}

        </StatsSection>
    </Container>
);
};