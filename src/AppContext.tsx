import * as React from "react";

import { IRankSet, IRecentGame, ISummoner } from "./base/interfaces";

export interface IAppContext {
  loading: boolean;
  summoner: ISummoner | null;
  recentGame: IRecentGame | null;
  setLoading: (loading: boolean) => void;
  setSummoner: (summoner: ISummoner | null) => void;
  setSummonerRank: (ranked: IRankSet) => void;
  setRecentGamesList: (recentGamesList: IRecentGame[]) => void;
  setRecentGame: (recentGame: IRecentGame) => void;
}

export const AppContext = React.createContext<IAppContext | null>(null);

export const AppContextConsumer = AppContext.Consumer;

export class AppContextProvider extends React.Component {
  state: IAppContext = {
    loading: false,
    summoner: null,
    recentGame: null,
    setLoading: this.setLoading.bind(this),
    setSummoner: this.setSummoner.bind(this),
    setSummonerRank: this.setSummonerRank.bind(this),
    setRecentGamesList: this.setRecentGamesList.bind(this),
    setRecentGame: this.setRecentGame.bind(this)
  }

  setLoading(loading: boolean) {
    this.setState({ loading })
  }

  setSummoner(summoner: ISummoner | null) {
    this.setState({ summoner })
  }

  setSummonerRank(ranked: IRankSet) {
    if(this.state.summoner) {
      this.setState({
        summoner: { ...this.state.summoner, ranked }
      });
    }
  }

  setRecentGamesList(recentGamesList: IRecentGame[]) {
    if (this.state.summoner) {
      this.setState({
        summoner: { ...this.state.summoner, recentGamesList }
      });
    }
  };

  setRecentGame(recentGame: IRecentGame) {
    console.log("AppContext [setRecentGame] - recentGame: ", recentGame);
    this.setState({ recentGame });
  }

  render() {
    return (
      <AppContext.Provider value={{
        loading: this.state.loading,
        summoner: this.state.summoner,
        recentGame: this.state.recentGame,
        setLoading: this.state.setLoading,
        setSummoner: this.state.setSummoner,
        setSummonerRank: this.state.setSummonerRank,
        setRecentGamesList: this.state.setRecentGamesList,
        setRecentGame: this.state.setRecentGame
      }}>
        { this.props.children }
      </AppContext.Provider>
    );
  }
}