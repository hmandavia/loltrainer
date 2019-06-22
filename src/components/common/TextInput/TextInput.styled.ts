import styled from "styled-components/native";

export const Container = styled.View`
    height: 40;
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 5px;
`;

export const Label = styled.Text`
    font-size: 18;
    padding: 0 0 0 20px;
    flex: 1;
`;

export const TextInputStyled = styled.TextInput`
    color: #000;
    padding: 0 5px;
    font-size: 18;
    line-height: 23;
    flex: 2;
    border: 0.5px solid #ccc;
    border-radius: 10;
    padding: 5px 15px;
`;
