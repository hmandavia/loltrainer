import styled from "styled-components/native";

interface IContainerStyledProps {
    backgroundColor: string;
}

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    height: 70px;
    background-color: ${({backgroundColor}: IContainerStyledProps) => backgroundColor};
`;

export const ChampionIcon = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25;
`;

export const StatsSection = styled.View`
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const KDAText = styled.Text`
    font-size: 13;
    font-weight: bold;
`;

export const RatioText = styled.Text`
    font-size: 9;
`;

export const StatsText = styled.Text`
    font-size: 12;
`;

export const ParticipationText = styled.Text`
    font-size: 11;
    color: red;
`;
