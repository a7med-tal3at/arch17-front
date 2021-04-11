import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { apiMiddlware } from './middleware';


export default function configureStore(initialState) {
    const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composerEnhancers(applyMiddleware(thunk,apiMiddlware)))
}
