import {combineReducers} from 'redux';

import OkrReducer from 'Pages/Okrs/reducer'

const reducer = combineReducers({
    okrPageState: OkrReducer,
});

export default reducer;