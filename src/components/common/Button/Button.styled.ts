import styled from "styled-components/native";
import { colors } from "../../../base/constants";

export const ButtonStyled = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  border-radius: 5;
  border-width: 1;
  border-color: ${colors.bluePrimary};
  background-color: ${colors.bluePrimary};
  margin: 0 5px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 16;
  font-weight: 600;
  padding: 5px 0;
`;
