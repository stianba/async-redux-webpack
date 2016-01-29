import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/services'
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore () {
  const store = finalCreateStore(reducer)
  return store;
}
