import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk)
const store = createStore(reducer, middleware);

export default store