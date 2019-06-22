import * as React from "react";

import { Result } from "../../../../base/enums";
import { IPlayer } from "../../../../base/interfaces";
import { getGameDetailColor } from "../../../../services/themeService";

import { ParticipantStats } from "./ParticipantStats";

import { List } from "./ParticipantsBody.styled";

export interface IParticipantBodyProps {
  result: Result;
  players: IPlayer[];
  playerParticipantId: number;
  highestDamageToChampions: number;
};

export class ParticipantsBody extends React.Component<IParticipantBodyProps> {
  constructor(props: IParticipantBodyProps) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }
  renderItem(item: any) {
    const player: IPlayer = item.item;

    const isSelectedPlayer = player.participantId === this.props.playerParticipantId ? true : false;

    return (
      <ParticipantStats
        player={ player }
        isSelectedPlayer={ isSelectedPlayer }
        highestDamageToChampions={ this.props.highestDamageToChampions }
      />
    );
  }

  render() {
    const { players, result } = this.props;

    return (
      <List
        data={ players }
        renderItem={ this.renderItem }
        keyExtractor={ (player: any) => player.id.toString() }
        backgroundColor={ getGameDetailColor(result) }
      />
    );
  }
}