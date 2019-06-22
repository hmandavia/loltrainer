import * as React from "react";

import { Header } from "../Header";

import {
  Body,
  LayoutStyled
} from "./Layout.styled";

export interface ILayoutProps {
  headerText?: string;
  children?: React.ReactChild | React.ReactChild[];
  onBackPress?: () => void;
};

export const Layout = ({headerText, children, onBackPress}: ILayoutProps) => {
  const renderHeader = () => {
    if (headerText) {
      return <Header headerText={ headerText} onBackPress={ onBackPress } />
    }
    return null;
  };

  return (
    <LayoutStyled>
      { renderHeader() }
      <Body>
        { children }
      </Body>
    </LayoutStyled>
  );
};