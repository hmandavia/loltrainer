import * as React from "react";

import { Container, Progress, Text } from "./StaticProgressBar.styled";

export interface IStaticProgressBarProps {
  progress: number;
  backgroundText: string;
};

export const StaticProgressBar = (props: IStaticProgressBarProps) => {
    const progressString: string = props.progress.toString() + "%";

    return (
        <Container>
            <Text>{props.backgroundText}</Text>
            <Progress width={progressString} />
        </Container>
    );
};
