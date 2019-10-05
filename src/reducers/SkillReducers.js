import { SKILL_FETCH } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SKILL_FETCH :
      return action.payload;
    default :
      return state;
  }
}