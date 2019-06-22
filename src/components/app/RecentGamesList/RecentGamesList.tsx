import * as React from "react";

import { IRecentGame } from "../../../base/interfaces";

import { Loading } from "../../../components/common";
import { RecentGame } from "./RecentGame";

import { List } from "./RecentGamesList.styled";

export interface IRecentGamesListProps {
  recentGames: IRecentGame[];
  onRecentGamePressed: (game: IRecentGame) => void;
  loading: boolean;
}

export class RecentGamesList extends React.Component<IRecentGamesListProps> {
  constructor(props: IRecentGamesListProps) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item: any) {
    const { onRecentGamePressed } = this.props;

    const recentGame: IRecentGame = item.item;

    return <RecentGame game={ recentGame } onPress={ onRecentGamePressed }/>;
  }

  render() {
    const { recentGames, loading } = this.props;

    if (loading) {
      return <Loading />;
    }
  
    return (
      <List
        data={ recentGames }
        renderItem={ this.renderItem }
        keyExtractor={ (game: any) => game.gameId.toString() }
      />
    );
  }
}

