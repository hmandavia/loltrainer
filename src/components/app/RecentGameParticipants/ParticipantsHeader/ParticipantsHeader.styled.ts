import styled from "styled-components/native";

interface IContainerStyledProps {
  backgroundColor: string;
}

interface ITextStyledProps {
  color: string;
}

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 22px;
    background-color: white;
    padding: 3px;
    border-style: solid;
    border-width: 0.5px;
    border-color: #cccccc;
    background-color: ${(props: IContainerStyledProps) => props.backgroundColor};
`;

export const ResultContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 5;
`;

export const ObjectivesContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-top-right-radius: 5;
`;

export const RiotIcon = styled.Image`
    height: 25;
    width: 25;
    left: 9;
    top: 5;
`;

export const OPIcon = styled.Image`
    height: 12;
    width: 12;
    margin-left: 10;
    margin-right: 2;
`;

export const Text = styled.Text`
   font-size: 11;
`;
