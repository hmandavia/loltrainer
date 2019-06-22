import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #F8F8F8;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60;
    width: 100%
    padding-top: 15;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.2;
    elevation: 5;
    position: relative;
    padding: 0 10px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TitleContainer = styled.View`
    flex: 8;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20;
`;
