import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom"


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}

                    
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});