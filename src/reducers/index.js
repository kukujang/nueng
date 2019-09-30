import { combineReducers } from "redux";
import PortfolioReducers from "./PortfolioReducers";
import SkillReducers from "./SkillReducers";

const rootReducers = combineReducers({
  portfolios: PortfolioReducers,
  skills: SkillReducers
});

export default rootReducers;