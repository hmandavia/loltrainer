import styled, { DefaultTheme } from "styled-components/native";

interface IContainerStyledProps {
    backgroundColor: string;
}

export const Container = styled.View<IContainerStyledProps>`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    background-color: ${ ({backgroundColor}: IContainerStyledProps) => backgroundColor };
    padding: 3px;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
`;

export const Text = styled.Text`
    font-size: 10px;
    color: white;
`;
