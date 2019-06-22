import * as React from "react";

import { ITeam } from "../../../../base/interfaces";
import {
  getGameDetailColor,
  getGameHeaderColor,
  getIcons
} from "../../../../services/themeService";

import {
  Container,
  ObjectivesContainer,
  OPIcon,
  ResultContainer,
  RiotIcon,
  Text
} from "./ParticipantsHeader.styled";

export interface IParticipantHeaderProps {
  teamStats: ITeam;
};

export const ParticipantsHeader = (props: IParticipantHeaderProps) => {
  const { teamStats } = props;
  const { baron, dragon, score, tower } = getIcons(teamStats.result);

  return (
    <Container backgroundColor={getGameDetailColor(teamStats.result)}>
      <ResultContainer>
        <RiotIcon source={{ uri: score }} />
        <Text>{teamStats.kills} / {teamStats.deaths} / {teamStats.assists}</Text>
      </ResultContainer>

      <ObjectivesContainer>
        <OPIcon source={{ uri: baron }} />
        <Text>{teamStats.barons}</Text>
        <OPIcon source={{ uri: dragon }} />
        <Text>{teamStats.dragons}</Text>
        <OPIcon source={{ uri: tower }} />
        <Text>{teamStats.turrets}</Text>
      </ObjectivesContainer>
    </Container>
  );
};