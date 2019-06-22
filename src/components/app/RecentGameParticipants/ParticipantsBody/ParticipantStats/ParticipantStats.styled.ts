import styled from "styled-components/native";

interface IContainerStyled {
  backgroundColor: string;
};

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    border-style: solid;
    border-width: 0.5px;
    border-color: #cccccc;
    height: 55px;
    background-color: ${(props: IContainerStyled) => props.backgroundColor};
`;

export const ChampionIcon = styled.Image`
    height: 35px;
    width: 35px;
    border-radius: 17;
`;

export const StatsSection = styled.View`
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PerformanceContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const NameText = styled.Text`
    font-size: 11;
    font-weight: bold;
`;

export const KDAText = styled.Text`
    font-size: 11;
    font-weight: bold;
`;

export const CSGText = styled.Text`
    font-size: 11;
    font-weight: bold;
    width: 50px;
`;

export const RatioText = styled.Text`
    font-size: 8;
`;

export const StatsText = styled.Text`
    font-size: 12;
`;

export const ParticipationText = styled.Text`
    font-size: 11;
    color: red;
`;

export const DamageMeterContainer = styled.View`
    height: 15px;
    width: 100px;
    margin-left: 15px;
`;
