import { combineReducers } from "redux";
import PortfolioReducers from "./PortfolioReducers";
import SkillReducers from "./SkillReducers";
import ExpReducers from "./ExpReducers";

const rootReducers = combineReducers({
  portfolios: PortfolioReducers,
  skills: SkillReducers,
  exps: ExpReducers
});

export default rootReducers;