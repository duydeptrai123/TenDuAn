import {combineReducers} from 'redux';

import answerReducer from "./answerReducer";
import userReducer from './userReducer';
import antreoReducer from './antreoReducer';

export default combineReducers({answerReducer, userReducer, antreoReducer});