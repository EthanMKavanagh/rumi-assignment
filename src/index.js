import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';



// Saga
function* rootSaga() {
  yield takeEvery('SUBMIT_FORM', submitForm);
}

function* submitForm(action) {
  console.log('inside of saga');

  try {
    let response = yield axios({
      method: 'POST',
      url: '/submit',
      data: action.payload
    });
   
    yield put({ 
      type: 'SET_SUBMISSIONS',
      payload: response.data
    });

  } catch (error) {
    console.log('poster POST request failed', error);
  }
}



const sagaMiddleware = createSagaMiddleware();



// Reducer
const submissions = (state = [], action) => {
  switch (action.type) {
    case 'SET_SUBMISSIONS':
      return [...state, action.payload];
    default:
      return state;
  }
};



// Create store
const storeInstance = createStore(
  combineReducers({
    submissions
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();