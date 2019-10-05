import { EXP_FETCH } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case EXP_FETCH :
      return action.payload;
    default :
      return state;
  }
}