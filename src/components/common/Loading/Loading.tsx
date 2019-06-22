import * as React from "react";
import { ActivityIndicator } from "react-native";

import { Container } from "./Loading.styled";

export interface ILoadingProps {
  size?: number | "small" | "large";
};

export const Loading = ({ size }: ILoadingProps) => {
  return (
    <Container>
      <ActivityIndicator size={ size || "large" } />
    </Container>
  );
};