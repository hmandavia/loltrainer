import styled from "styled-components/native";

interface IStyledIconProps {
    size: number
}

export const Container = styled.View`
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Icon = styled.Image<IStyledIconProps>`
    height: ${({size}: IStyledIconProps) => size};
    width: ${({size}: IStyledIconProps) => size};
`;
