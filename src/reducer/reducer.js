import {combineReducers} from "redux";
import {reducer as movies} from "./movies/movies.js";
import {reducer as state} from "./state/state.js";
import {reducer as moviePage} from "./movie-page/movie-page.js";
import {reducer as user} from "./user/user.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.MOVIES]: movies,
  [NameSpace.STATE]: state,
  [NameSpace.MOVIE_PAGE]: moviePage,
  [NameSpace.USER]: user
});
