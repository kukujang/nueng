import jsonPortfolio from "../data/portfolio.json";
import { PORTFOLIO_FETCH } from "./types";

export const portfolioFetch = () => {
  return dispatch => {
    dispatch({ type : PORTFOLIO_FETCH, payload:jsonPortfolio});
  }
} 
