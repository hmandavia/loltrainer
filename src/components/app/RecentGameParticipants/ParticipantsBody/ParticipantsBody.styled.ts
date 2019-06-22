import { FlatList } from "react-native";
import styled from "styled-components/native";

interface IListStyledProps {
  backgroundColor: string;
};

export const List = styled(FlatList)`
    border-style: solid;
    border-color: #b3b3b3;
    background-color: ${(props: IListStyledProps) => props.backgroundColor};
`;
