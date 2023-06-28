import { combineReducers } from 'redux';
import weatherReducer from './weather';

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer;
