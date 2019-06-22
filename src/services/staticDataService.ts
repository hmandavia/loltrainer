import { Divisions, Keystone, RuneStyle, SummonerSpell, Tiers } from "../base/enums";

import {
  rankIcons,
  keystones,
  styles,
  summonerSpellIcons
} from "../assets/icons";

const VERSION = "9.11.1";
const CDN_URL = "https://ddragon.leagueoflegends.com/cdn/";

export const getChampionIconUrl = (name: string): string => {
  return CDN_URL + VERSION + "/img/champion/" + name + ".png";
};

export const getItemIconUrl = (id: string): string => {
  return CDN_URL + VERSION + "/img/item/" + id + ".png";
};

export const getSummonerSpellIconUrl = (id: string) => {
  switch (id) {
      case SummonerSpell.barrier:
          return summonerSpellIcons.barrier;
      case SummonerSpell.boost:
          return summonerSpellIcons.boost;
      case SummonerSpell.dot:
          return summonerSpellIcons.dot;
      case SummonerSpell.exhaust:
          return summonerSpellIcons.exhaust;
      case SummonerSpell.flash:
          return summonerSpellIcons.flash;
      case SummonerSpell.haste:
          return summonerSpellIcons.haste;
      case SummonerSpell.heal:
          return summonerSpellIcons.heal;
      case SummonerSpell.mana:
          return summonerSpellIcons.mana;
      case SummonerSpell.smite:
          return summonerSpellIcons.smite;
      case SummonerSpell.snowball:
          return summonerSpellIcons.snowball;
      case SummonerSpell.teleport:
          return summonerSpellIcons.teleport;

  }
};

export const getKeystoneIcon = (name: string) => {
  switch (name) {
      case Keystone.aftershock:
          return keystones.aftershock;
      case Keystone.arcaneComet:
          return keystones.arcaneComet;
      case Keystone.conqueror:
          return keystones.conqueror;
      case Keystone.darkHarvest:
          return keystones.darkHarvest;
      case Keystone.electrocute:
          return keystones.electrocute;
      case Keystone.fleetFootwork:
          return keystones.fleetFootwork;
      case Keystone.glacialAugment:
          return keystones.glacialAugment;
      case Keystone.graspOfTheUndying:
          return keystones.graspOfTheUndying;
      case Keystone.guardian:
          return keystones.guardian;
      case Keystone.hailOfBlades:
          return keystones.hailOfBlades;
      case Keystone.kleptomancy:
          return keystones.kleptomancy;
      case Keystone.lethalTempo:
          return keystones.lethalTempo;
      case Keystone.phaseRush:
          return keystones.phaseRush;
      case Keystone.predator:
          return keystones.predator;
      case Keystone.pressTheAttack:
          return keystones.pressTheAttack;
      case Keystone.summonAery:
          return keystones.summonAery;
      case Keystone.unsealedSpellbook:
          return keystones.unsealedSpellbook;
  }
};

export const getRuneStyleIcon = (name: string) => {
  switch (name) {
      case RuneStyle.domination:
          return styles.domination;
      case RuneStyle.inspiration:
          return styles.inspiration;
      case RuneStyle.precision:
          return styles.precision;
      case RuneStyle.resolve:
          return styles.resolve;
      case RuneStyle.sorcery:
          return styles.sorcery;
  }
};

export const getRankIcon = (tier: Tiers, division: Divisions) => {
  switch (tier) {
      case Tiers.Unranked:
          return rankIcons.unranked;

      case Tiers.Bronze:
          switch (division) {
              case Divisions.I:
                  return rankIcons.bronze_i;
              case Divisions.II:
                  return rankIcons.bronze_ii;
              case Divisions.III:
                  return rankIcons.bronze_iii;
              case Divisions.IV:
                  return rankIcons.bronze_iv;
              case Divisions.V:
                  return rankIcons.bronze_v;
              default:
                  return null;
          }

      case Tiers.Silver:
          switch (division) {
              case Divisions.I:
                  return rankIcons.silver_i;
              case Divisions.II:
                  return rankIcons.silver_ii;
              case Divisions.III:
                  return rankIcons.silver_iii;
              case Divisions.IV:
                  return rankIcons.silver_iv;
              case Divisions.V:
                  return rankIcons.silver_v;
              default:
                  return null;
          }

      case Tiers.Gold:
          switch (division) {
              case Divisions.I:
                  return rankIcons.gold_i;
              case Divisions.II:
                  return rankIcons.gold_ii;
              case Divisions.III:
                  return rankIcons.gold_iii;
              case Divisions.IV:
                  return rankIcons.gold_iv;
              case Divisions.V:
                  return rankIcons.gold_v;
              default:
                  return null;
          }

      case Tiers.Platinum:
          switch (division) {
              case Divisions.I:
                  return rankIcons.platinum_i;
              case Divisions.II:
                  return rankIcons.platinum_ii;
              case Divisions.III:
                  return rankIcons.platinum_iii;
              case Divisions.IV:
                  return rankIcons.platinum_iv;
              case Divisions.V:
                  return rankIcons.platinum_v;
              default:
                  return null;
          }

      case Tiers.Diamond:
          switch (division) {
              case Divisions.I:
                  return rankIcons.diamond_i;
              case Divisions.II:
                  return rankIcons.diamond_i;
              case Divisions.III:
                  return rankIcons.diamond_i;
              case Divisions.IV:
                  return rankIcons.diamond_i;
              case Divisions.V:
                  return rankIcons.diamond_i;
              default:
                  return null;
          }

      case Tiers.Master:
          return rankIcons.master;

      case Tiers.Challenger:
          return rankIcons.challenger;

      default:
          return null;
  }
};

