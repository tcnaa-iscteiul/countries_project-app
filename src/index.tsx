import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from './App';
import reportWebVitals from './reportWebVitals';

import reducer from "./store/reducer"

const store: Store<CountryState, CountryAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
