import * as React from "react";
import { Icon } from "react-native-elements";

export interface IButtonIcon {
  onPress: () => void;
  iconName: string;
}

export const ButtonIcon = ({ onPress, iconName }: IButtonIcon) => {
  return (
    <Icon
      name={ iconName }
      onPress={ onPress }
    />
  );
}