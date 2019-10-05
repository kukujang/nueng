import { PORTFOLIO_FETCH } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case PORTFOLIO_FETCH :
      return action.payload;
    default :
      return state;
  }
}