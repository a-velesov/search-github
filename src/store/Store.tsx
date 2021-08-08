import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { IOrganization, organizationReducer } from './reducers/organizationReducer'

// Create an interface for the application state
export interface IAppState {
  organization: IOrganization
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
