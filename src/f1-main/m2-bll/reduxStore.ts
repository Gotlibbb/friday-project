import { combineReducers } from "redux";
import { createStore } from "redux";
import { Store } from "redux";
import {loginReducer} from "./b1-reducers/loginReducer";
import {registrationReducer} from "./b1-reducers/registrationReducer";
import {passwordReducer} from "./b1-reducers/passwordReducer";
import {profileReducer} from "./b1-reducers/profileReducer";

let reducers = combineReducers({
    login: loginReducer,
    profile: profileReducer,
    registration: registrationReducer,
    password: passwordReducer,

})

export let store: Store = createStore(reducers);

// @ts-ignore
window.store = store;