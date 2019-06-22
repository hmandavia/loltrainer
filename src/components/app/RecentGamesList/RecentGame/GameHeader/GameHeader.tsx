import * as React from "react";

import { MatchType, Result } from "../../../../../base/enums";
import { getGameHeaderColor } from "../../../../../services/themeService";

import { Container, Text } from "./GameHeader.styled";

export interface IGameHeaderProps {
  duration: string;
  timeAgo: string;
  type: MatchType;
  result: Result;
};

export const GameHeader = (props: IGameHeaderProps) => {
  const { timeAgo, duration, type, result } = props;
  const color = getGameHeaderColor(result);

  return (
    <Container
      backgroundColor={color}
    >
      <Text>{type}</Text>
      <Text>-</Text>
      <Text>{timeAgo}</Text>
      <Text>-</Text>
      <Text>{duration}</Text>
      <Text>-</Text>
      <Text>{result}</Text>
    </Container>
  );
};