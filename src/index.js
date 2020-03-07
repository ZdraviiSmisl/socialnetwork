import * as serviceWorker from './serviceWorker';
import store from "./redux(BLL)/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <HashRouter>
           <Provider store={store}>
            <App />
       </Provider>
        </HashRouter>, document.getElementById('root'));
}


rerenderEntireTree();
store.subscribe(()=>{

    rerenderEntireTree();
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//state={state} dispatch={store.dispatch.bind(store)}
//             store={store}