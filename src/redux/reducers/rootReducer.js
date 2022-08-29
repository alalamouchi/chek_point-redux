import counterReducer from "./counter";
import toDoReducer from "./toDoReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ toDoReducer });
