import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import './mock/MockServer'
import App from "./components/App/App";

import './components/assets/reset.css'

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>), document.getElementById('root'))
