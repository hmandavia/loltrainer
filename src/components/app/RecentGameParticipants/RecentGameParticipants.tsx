import * as React from "react";
import { ScrollView } from "react-native";

import { Role } from "../../../base/enums";
import { IPlayer, ITeam } from "../../../base/interfaces";

import { ParticipantsBody } from "./ParticipantsBody";
import { ParticipantsHeader } from "./ParticipantsHeader";

import { Container } from "./RecentGameParticipants.styled";

export interface IRecentGameParticipantsProps {
  playerTeam: ITeam;
  opponentTeam: ITeam;
  playerParticipantId: number;
  playerRole: Role;
  highestDamageToChampions: number;
};

export class RecentGameParticipants extends React.Component<IRecentGameParticipantsProps> {
  state = {
    opponentParticipantId: 0
  };

  componentDidMount() {
    const filteredOpponents: IPlayer[] = this.props.opponentTeam.players.filter((player: IPlayer) => {
      return player.stats.role === this.props.playerRole;
    });

    const opponentParticipantId = filteredOpponents.length > 0 ? filteredOpponents[0].participantId : 0;
    this.setState({ opponentParticipantId });
  }

  render() {
    const {
      playerTeam,
      opponentTeam,
      playerParticipantId,
      playerRole,
      highestDamageToChampions
    } = this.props;

    return (
      <ScrollView>
        <Container>
          <ParticipantsHeader
            teamStats={playerTeam}
          />
          <ParticipantsBody
            result={playerTeam.result}
            players={playerTeam.players}
            playerParticipantId={playerParticipantId}
            highestDamageToChampions={highestDamageToChampions}
          />
          <ParticipantsHeader
            teamStats={opponentTeam}
          />
          <ParticipantsBody
            result={opponentTeam.result}
            players={opponentTeam.players}
            playerParticipantId={this.state.opponentParticipantId}
            highestDamageToChampions={highestDamageToChampions}
          />
        </Container>
      </ScrollView>
    );
  }
}