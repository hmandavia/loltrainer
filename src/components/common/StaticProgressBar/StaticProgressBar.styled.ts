import styled from "styled-components/native";

interface IViewProps {
  width: string;
};

export const Container = styled.View`
    height: 100%;
    width: 100%;
    background-color: #ccc;
    border-radius: 2px;
`;

export const Text = styled.Text`
    color: black;
    z-index: 1000;
    font-size: 11;
    position: absolute;
    padding-bottom: 10px;
    align-self: center;
`;

export const Progress = styled.View`
    height: 100%;
    width: ${(props: IViewProps) => props.width};
    background-color: #ee5a52;
    border-radius: 2px;
`;
