import { createStore, applyMiddleware } from "redux";
// redux logger middleware catch the action log it to the console and moves along
import logger from "redux-logger";
// redux persisit to save the store in the localstorage
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

//store expects middleware to be an array
const middlewares = [logger];

//creating the store and psss rootreducer and all the middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
