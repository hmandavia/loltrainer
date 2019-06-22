import * as React from "react";
import { withRouter } from "react-router-native";

import { AppContext } from "../../../AppContext";
import { searchSummoner } from "../../../services/riotAPIService";

import {Button, Layout, TextInput} from "../../common";

import {
  ButtonContainer,
  InputContainer,
  SearchStyledContainer
} from "./Search.styled";

class Search extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: ""
    }

    this.onSearchPress = this.onSearchPress.bind(this);
  }

  onChangeText(name: string) {
    this.setState({ name });
  }

  onSearchPress() {
    searchSummoner(this.state.name)
      .then(result => result.json())
      .then(summoner => {
        this.context.setSummoner(summoner);
        this.props.history.push("/summoner");
      });
  }

  render() {
    return (
      <Layout>
        <SearchStyledContainer>
          <InputContainer>
            <TextInput
              label=""
              value={this.state.name}
              placeholder="Summoner Name..."
              onChangeText={(text: string) => this.onChangeText(text)}
            />
          </InputContainer>
          <ButtonContainer>
            <Button onPress={this.onSearchPress}>Search!</Button>
          </ButtonContainer>
        </SearchStyledContainer>
      </Layout>
    );
  }
}

Search.contextType = AppContext;

const SearchWithRouter = withRouter(Search);

export default SearchWithRouter;