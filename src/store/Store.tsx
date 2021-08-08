import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { IInitialState, organizationReducer } from './reducers/organizationReducer'

export interface IAppState {
  organization: IInitialState
}

const rootReducer = combineReducers<IAppState>({
  organization: organizationReducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, enhancer)
  return store
}
