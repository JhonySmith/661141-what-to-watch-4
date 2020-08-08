import {combineReducers} from "redux";
import {reducer as movies} from "./movies/movies.js";
import {reducer as state} from "./state/state.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.MOVIES]: movies,
  [NameSpace.STATE]: state
});
