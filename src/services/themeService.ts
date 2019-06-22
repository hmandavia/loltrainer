import { globalIcons } from "../assets/icons/global-icons";
import { colors } from "../base/constants";
import { Result } from "../base/enums";

export const getGameHeaderColor = (result: Result) => {
  switch (result) {
    case Result.Win:
        return colors.blueSolid;
    case Result.Loss:
        return colors.redSolid;
    case Result.Remake:
        return colors.greySolid;
    default:
        return colors.greySolid;
  };
};

export const getGameDetailColor = (result: Result) => {
  switch (result) {
    case Result.Win:
        return colors.blueSemi;
    case Result.Loss:
        return colors.redSemi;
    case Result.Remake:
        return colors.greySemi;
    default:
        return colors.greySemi;
  }
};

export const getIcons = (result: Result) => {
    const icons = {
        champion: globalIcons.champion,
        items: globalIcons.items,
        gold: globalIcons.gold,
        minion: globalIcons.minion,
        score: globalIcons.score,
        spells: globalIcons.spells
    };

    switch (result) {
        case Result.Remake:
        case Result.Win:
            return {
                ...icons,
                baron: globalIcons.baronWin,
                dragon: globalIcons.dragonWin,
                tower: globalIcons.towerWin
            };
        case Result.Loss:
            return {
                ...icons,
                baron: globalIcons.baronLose,
                dragon: globalIcons.dragonLose,
                tower: globalIcons.towerLose
            };
    }
};

export const getParticipantBackgroundColor = (isSelected: boolean) => {
    if (isSelected) {
        return colors.highlighted;
    }
    return colors.white;
};