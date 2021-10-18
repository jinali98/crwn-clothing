import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// redux logger middleware catch the action log it to the console and moves along
import rootReducer from "./root-reducer";

//store expects middleware to be an array
const middlewares = [logger];

//creating the store and psss rootreducer and all the middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
