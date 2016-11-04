import { combineReducers } from 'redux';
import ArtistsReducer from './artistsReducer';

const rootReducer = combineReducers({
  artists: ArtistsReducer
});

export default rootReducer;
