import * as React from "react";

import { ButtonIcon } from "../ButtonIcon";

import {
  Container,
  ButtonContainer,
  TitleContainer,
  Title
} from "./Header.styled";

export interface IHeaderProps {
  headerText: string;
  onBackPress?: () => void;
}

export const Header = ({ headerText, onBackPress }: IHeaderProps) => {

  const renderButton = () => {
    if (onBackPress) {
      return <ButtonIcon onPress={ onBackPress } iconName="arrow-back" />;
    }
    return null;
  };

  return (
    <Container>
      <ButtonContainer>
        { renderButton() }
      </ButtonContainer>

      <TitleContainer>
        <Title>{ headerText }</Title>
      </TitleContainer>

    </Container>
  );
};
