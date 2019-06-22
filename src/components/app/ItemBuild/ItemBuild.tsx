import * as React from "react";

import { IFinalBuild } from "../../../base/interfaces";

import { Container, ItemContainer, Icon } from "./ItemBuild.styled";

export interface IITemBuildProps {
  finalBuild: IFinalBuild;
  isRow?: boolean;
};

export const ItemBuild = (props: IITemBuildProps) => {
  const { finalBuild, isRow } = props;

  if (isRow) {
    return ItemBuildRow(finalBuild);
  }
  return ItemBuildDefault(finalBuild);
}

const ItemBuildDefault = (finalBuild: IFinalBuild) => {
  const { item1, item2, item3, item4, item5, item6, trinket } = finalBuild;
  return (
    <Container>
      <ItemContainer>
        <Icon source={{ uri: item1.iconUrl }} />
        <Icon source={{ uri: item2.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: item3.iconUrl }} />
        <Icon source={{ uri: item4.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: item5.iconUrl }} />
        <Icon source={{ uri: item6.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: trinket.iconUrl }} />
      </ItemContainer>
    </Container>
  );
};

const ItemBuildRow = (finalBuild: IFinalBuild) => {
  const { item1, item2, item3, item4, item5, item6, trinket } = finalBuild;
  return (
    <Container>
      <ItemContainer>
        <Icon source={{ uri: item1.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: item2.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: item3.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: item4.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: item5.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: item6.iconUrl }} />
      </ItemContainer>

      <ItemContainer>
        <Icon source={{ uri: trinket.iconUrl }} />
      </ItemContainer>
    </Container>
  );
};