import articleReducers from "../reducers/articleReducers";
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';



const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    // login: loginReducers,
    // register: registerReducers,
    article: articleReducers
  
})

export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)


// export const store = createStore( reducers, composeWithDevTools(
//     applyMiddleware(thunk)
// ));