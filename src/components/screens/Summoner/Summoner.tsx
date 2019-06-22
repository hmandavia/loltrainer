import * as React from "react";
import { withRouter } from "react-router";

import { AppContext } from "../../../AppContext";

import { IRankSet, IRecentGame, ISummoner } from "../../../base/interfaces";
import { getRecentGamesList, getSummonerRank } from "../../../services/riotAPIService";

import { RankSummary } from "../../../components/app/Rank";
import { RecentGamesList } from "../../../components/app/RecentGamesList";
import { Layout } from "../../../components/common";

import {
  SummonerContainer
} from "./Summoner.styled";

class Summoner extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.handleBackPress = this.handleBackPress.bind(this);
    this.handleGameSelected = this.handleGameSelected.bind(this);
  }

  componentDidMount() {
    const summoner: ISummoner = { ...this.context.summoner };

    this.context.setLoading({ loading: true });

    getSummonerRank(summoner.id)
      .then(result => result.json())
      .then(ranked => {
        this.context.setSummonerRank(ranked);
      });

    getRecentGamesList(summoner.accountId, summoner.name)
      .then(result => result.json())
      .then(games => {
        this.context.setRecentGamesList(games);
        this.context.setLoading(false);
      });
  }

  renderRankSummary(ranked: IRankSet) {
    if (ranked) {
      return <RankSummary ranked={ ranked } />
    }
  }

  handleBackPress() {
    this.context.setSummoner(null);
    this.props.history.goBack();
  }

  handleGameSelected(game: IRecentGame) {
    this.context.setRecentGame(game);
    this.props.history.push("/recent-game");
  }

  render() {
    const { loading, summoner } = this.context;

    return (
      <Layout headerText={ summoner.name } onBackPress={ this.handleBackPress } >
        <SummonerContainer>
          
          { this.renderRankSummary(summoner.ranked) }

          <RecentGamesList
            loading={ loading }
            onRecentGamePressed={ (game: IRecentGame) => this.handleGameSelected(game) }
            recentGames={ summoner.recentGamesList }
          />

        </SummonerContainer>
      </Layout>
    );
  }
}

Summoner.contextType = AppContext;

const SummonerWithRouter = withRouter(Summoner);

export default SummonerWithRouter;