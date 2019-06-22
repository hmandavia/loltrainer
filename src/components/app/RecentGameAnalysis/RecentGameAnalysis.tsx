import * as React from "react";

import { Role } from "../../../base/enums";
import { ITeam } from "../../../base/interfaces";

import { Container } from "./RecentGameAnalysis.styled";

export interface IRecentGameAnalysisProps {
  playerTeam: ITeam;
  opponentTeam: ITeam;
  playerParticipantId: number;
  playerRole: Role;
};

export const RecentGameAnalysis = (props: IRecentGameAnalysisProps) => {
  return (
    <Container />
  );
};
