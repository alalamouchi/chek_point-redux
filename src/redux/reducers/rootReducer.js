import counterReducer from "./counter";
import textReducer from "./textReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ counterReducer, textReducer });
