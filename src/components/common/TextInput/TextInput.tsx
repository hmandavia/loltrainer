import * as React from "react";

import {
  Container,
  TextInputStyled,
  Label
} from "./TextInput.styled";

export interface ITextInputProps {
  label: string;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean
  onChangeText: (text: string) => void;
};

export const TextInput = ({ label, value, placeholder, secureTextEntry,  onChangeText}: ITextInputProps) => {
  const renderLabel = () => {
    return label ? <Label>{ label }</Label> : null;
  }

  return(
    <Container>
      { renderLabel() }
      <TextInputStyled
        autoCorrect={false}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
      />
    </Container>
  );
};
