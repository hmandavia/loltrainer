import { FlatList } from "react-native";
import styled from "styled-components/native";

export const List = styled(FlatList)`
    border-radius: 5;
    border-width: 0;
    border-style: solid;
    border-color: #b3b3b3;
    background-color: white;
`;

export const ListContainer = styled.View`
    height: 100%;
`;
