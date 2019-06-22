import * as React from "react";

import { Tiers, Divisions } from "../../../../base/enums";
import { IRank } from "../../../../base/interfaces";
import { getRankIcon } from "../../../../services/staticDataService";

import { Container, Label, Icon } from "./RankSection.styled";

export interface IRankSectionProps {
  rank: IRank;
  title: string;
};

export const RankSection = (props: IRankSectionProps) => {
  const { title } = props;
  let { rank } = props;

  if(!rank) {
    rank = {
      tier: Tiers.Unranked,
      division: Divisions.NA,
      leaguePoints: "-"
    };
  }

  const icon = getRankIcon(rank.tier, rank.division);
  return (
    <Container>
      <Label>{ title }</Label>
      <Icon source={ icon } />
      <Label>{ rank.tier } { rank.division }</Label>
      <Label>{ rank.leaguePoints } LP</Label>
    </Container>
  );
};