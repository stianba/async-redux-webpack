import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from './store/configureStore'
import App from './containers/App'
import DevTools from './containers/DevTools'

const store = createStore()

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
