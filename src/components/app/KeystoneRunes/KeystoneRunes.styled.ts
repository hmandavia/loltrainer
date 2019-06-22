import styled from "styled-components/native";

interface IStyledIcon {
    size: number;
};

export const Container = styled.View`
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const KeystoneIcon = styled.Image`
    height: ${({ size }: IStyledIcon) => size};
    width: ${({ size }: IStyledIcon) => size};
    border-radius: 10;
`;

export const SecondaryIcon = styled.Image`
    height: ${({ size }: IStyledIcon) => size};
    width: ${({ size }: IStyledIcon) => size};
    border-radius: 25;
`;
