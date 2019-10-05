import jsonSkill from "../data/skill.json";
import { SKILL_FETCH } from "./types";

export const skillFetch = () => {
  return dispatch => {
    dispatch({ type : SKILL_FETCH, payload:jsonSkill});
  }
} 
