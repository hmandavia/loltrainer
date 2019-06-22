import *  as React from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import { IRecentGame } from "../../../base/interfaces";

import { RecentGameAnalysis } from "../../app/RecentGameAnalysis";
import { RecentGameParticipants } from "../../app/RecentGameParticipants";

export interface IRecentGameTabsProps {
  recentGame: IRecentGame;
};

export class RecentGameTabs extends React.Component<IRecentGameTabsProps> {
  state = {
    index: 0,
    routes: [
      { key: "participant", title: "Team Details" },
      { key: "analysis", title: "Analysis" }
    ]
  };

  constructor(props: IRecentGameTabsProps) {
    super(props);

    this.getParticipantsComponent = this.getParticipantsComponent.bind(this);
    this.getRecentGameAnalysisComponent = this.getRecentGameAnalysisComponent.bind(this);
  }

  getParticipantsComponent() {
    const recentGame: IRecentGame = this.props.recentGame;

    return (
      <RecentGameParticipants
        playerTeam={ recentGame.playerTeam }
        opponentTeam={ recentGame.opponentTeam }
        playerParticipantId={ recentGame.playerParticipantId }
        playerRole={ recentGame.playerStats.role }
        highestDamageToChampions={ recentGame.highestDamageToChampions }
      />
    );
  }

  getRecentGameAnalysisComponent() {
    const recentGame: IRecentGame = this.props.recentGame;
    return (
      <RecentGameAnalysis
        playerTeam={recentGame.playerTeam}
        opponentTeam={recentGame.opponentTeam}
        playerParticipantId={recentGame.playerParticipantId}
        playerRole={recentGame.playerStats.role}
      />
    );
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={
          SceneMap({
            participant: this.getParticipantsComponent,
            analysis: this.getRecentGameAnalysisComponent
          })
        }
        onIndexChange={(index: number) => this.setState({ index })}
      />
    );
  }
}