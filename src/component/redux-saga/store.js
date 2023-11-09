import {createStore, applyMiddleware} from 'redux'
import rootreducer from './rootreducer';
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootreducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(productSaga);

export default store;