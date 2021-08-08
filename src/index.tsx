import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import configureStore, { IAppState } from './store/Store'

interface IProps {
  store: Store<IAppState>
}

const Root = ({ store }: IProps) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
