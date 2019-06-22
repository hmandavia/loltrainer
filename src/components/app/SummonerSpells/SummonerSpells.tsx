import * as React from "react";

import { getSummonerSpellIconUrl } from "../../../services/staticDataService";

import { Container, Icon } from "./SummonerSpells.styled";

export interface ISummonerSpellsProps {
  spell1: string;
  spell2: string;
  size: number;
};

export const SummonerSpells = (props: ISummonerSpellsProps) => {
  const { spell1, spell2, size } = props;

  const spell1Icon = getSummonerSpellIconUrl(spell1);
  const spell2Icon = getSummonerSpellIconUrl(spell2);

  return (
    <Container>
      <Icon
        source={ spell1Icon }
        size={ size }
      />

      <Icon
        source={ spell2Icon }
        size={ size }
      />
    </Container>
  );
};