import * as React from "react";
import { View } from "react-native";

import { IRankSet } from "../../../../base/interfaces";
import { RankSection } from "../RankSection";

import { RankContainer } from "./RankSummary.styled";

export interface IRankSummaryProps {
  ranked: IRankSet;
}

export const RankSummary = (props: IRankSummaryProps) => {
  return (
    <View>
      <RankContainer>
        <RankSection
          rank={ props.ranked.solo }
          title="Solo / Duo"
        />
        <RankSection
          rank={ props.ranked.flex5 }
          title="Flex 5v5"
        />
        <RankSection
          rank={ props.ranked.flex3 }
          title="Flex 3v3"
        />
      </RankContainer>
    </View>
  );
};