import {applyMiddleware, combineReducers, createStore} from "redux";
import {guestReducer} from './guestReducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	guest: guestReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))