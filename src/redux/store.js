import { createStore, applyMiddleware } from "redux";
// redux logger middleware catch the action log it to the console and moves along
import logger from "redux-logger";
// redux persisit to save the store in the localstorage
import { persistStore } from "redux-persist";
// redux thunk to fire async actions
import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import { fetchCollectionsStart } from "./shop/shop.saga";

const sagaMiddleware = createSagaMiddleware();

//store expects middleware to be an array
const middlewares = [logger, sagaMiddleware];

//creating the store and psss rootreducer and all the middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

const persistor = persistStore(store);

export { store, persistor };
