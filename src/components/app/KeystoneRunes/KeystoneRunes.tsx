import * as React from "react";

import { getKeystoneIcon, getRuneStyleIcon } from "../../../services/staticDataService";

import {
  Container,
  KeystoneIcon,
  SecondaryIcon
} from "./KeystoneRunes.styled";

export interface IKeystoneRunesProps {
  keystone: string;
  secondaryStyle: string;
  keystoneSize: number;
  secondarySize: number;
};

export const KeystoneRunes = (props: IKeystoneRunesProps) => {
  const { keystone, secondaryStyle, keystoneSize, secondarySize } = props;
  
  const keyStoneIcon = getKeystoneIcon(keystone);
  const secondaryStyleIcon = getRuneStyleIcon(secondaryStyle);

  return (
    <Container>
      <KeystoneIcon
        source={keyStoneIcon}
        size={keystoneSize}
      />
      <SecondaryIcon
        source={secondaryStyleIcon}
        size={secondarySize}
      />
    </Container>
  );
};