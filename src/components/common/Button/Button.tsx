import * as React from "react";

import { 
  ButtonStyled,
  Text
} from "./Button.styled";

export interface IButtonProps {
  onPress: () => void;
  children: React.ReactChild;
}

export const Button = ({onPress, children}: IButtonProps) => {
  return (
    <ButtonStyled
      onPress={ onPress }
    >
      <Text>
        { children }
      </Text>
    </ButtonStyled>
  );
};
