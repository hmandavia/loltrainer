import * as React from "react";
import { TouchableOpacity } from "react-native";

import { IRecentGame } from "../../../../base/interfaces";

import { GameDetails } from "./GameDetails";
import { GameHeader } from "./GameHeader";

import { Container } from "./RecentGame.styled";

export interface IRecentGameProps {
  game: IRecentGame;
  onPress: (game: IRecentGame) => void;
};

export const RecentGame = (props: IRecentGameProps) => {
  const { game, onPress } = props;
  const { timeAgo, duration, type, result, playerStats, playerTeam } = game;

  return (
    <TouchableOpacity onPress={() => onPress(game)}>
      <Container>
        <GameHeader
          timeAgo={timeAgo}
          duration={duration}
          type={type}
          result={result}
        />
        <GameDetails
          playerStats={playerStats}
          playerTeam={playerTeam}
          result={result}
        />
      </Container>
    </TouchableOpacity>
  );
};