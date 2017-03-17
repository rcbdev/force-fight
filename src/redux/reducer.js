import { combineReducers } from 'redux';
import fight from './modules/fight';
import heroes from './modules/heroes';
import villains from './modules/villains';
import score from './modules/score';

export default combineReducers({
    fight,
    heroes,
    villains,
    score
});
