import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-color: #b3b3b3;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid ;
  align-self: stretch;
  padding: 5px;
`;

export const Icon = styled.Image`
  width: 50;
  height: 50;
`;

export const Label = styled.Text`
    font-size: 11;
`;
