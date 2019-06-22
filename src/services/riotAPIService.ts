import { Platform } from "react-native";

const DEFAULT_DOMAIN = "http://0.0.0.0:3000/";
const ANDROID_DOMAIN = "http://10.0.2.2:3000/";

export const getApiDomain = () => {
  if(__DEV__) {
    return Platform.OS === "android" ? 
      ANDROID_DOMAIN :
      DEFAULT_DOMAIN;
  }
  return ANDROID_DOMAIN;
};

const apiDomain = getApiDomain();

export const searchSummoner = (summonerName: string) => {
  return fetch(apiDomain + "summoner/euw1/" + summonerName);
};

export const getSummonerRank = (id: number) => {
  return fetch(apiDomain + "rank/euw1/" + id);
};

export const getRecentGamesList = (accountId: number, summonerName: string) => {
  return fetch(apiDomain + "matches/euw1/" + accountId + "/" + summonerName + "/5");
};