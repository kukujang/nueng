import jsonExp from "../data/experience.json";
import { EXP_FETCH } from "./types";

export const expFetch = () => {
  return dispatch => {
    dispatch({ type : EXP_FETCH, payload:jsonExp});
  }
} 
