import { connectRouter, routerMiddleware, RouterRootState } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore  } from 'redux';
  
export const history = createBrowserHistory();

export interface RootState{
      router: RouterRootState
  }
  
const rootReducer = combineReducers({
      router: connectRouter(history)
  });
  
declare global{
    /* tslint:disable:interface-name */
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:any
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(routerMiddleware(history))
))