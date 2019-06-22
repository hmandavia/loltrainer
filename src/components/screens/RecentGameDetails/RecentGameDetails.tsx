import * as React from "react";
import { withRouter } from "react-router";

import { AppContext } from "../../../AppContext";

import { RecentGameTabs } from "../../app/RecentGameTabs";
import { Layout } from "../../common";

import { Container } from "./RecentGameDetails.styled";

class RecentGameDetails extends React.Component<any> {
  constructor(props: any) {
    super(props);

    this.handleBackPress.bind(this);
  }

  handleBackPress() {
    this.context.setRecentGame(null);
    this.props.history.goBack();
  }

  render() {
    const { recentGame } = this.context;
    console.log("RECENT_GAME: ", recentGame);
    return (
      <Layout headerText="Match Details" onBackPress={ this.handleBackPress }>
        <Container>
          <RecentGameTabs
            recentGame={recentGame}
          />
        </Container>
      </Layout>
    );
  }
}

RecentGameDetails.contextType = AppContext;

const RecentGameDetailsWithRouter = withRouter(RecentGameDetails);

export default RecentGameDetailsWithRouter;
