import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebar from './sidebar-reducer';
import testReducer from './test-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import authNAVReducer from "./ayth-nav-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebar,
    testReducer: testReducer,
    usersPage: usersReducer,
    auth: authReducer,
    authTwo: authNAVReducer,

});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;