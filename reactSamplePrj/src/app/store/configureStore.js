import { createStore,compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import DevTools from 'app/containers/DevTools';

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument(),

);

export default function configureStore(initialState, initAction) {
  const store = createStore(rootReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  if (initAction) {
    initAction(store);
  }
  return store;
}

