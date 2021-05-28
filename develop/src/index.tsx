import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './global.scss';

ReactDOM.render(
    <BrowserRouter>
        <ul>
            <li>
                <a href="https://ribalkoko48.github.io/angular">Angular</a>
            </li>
            <li>
                <a href="https://ribalkoko48.github.io/profi_test">profi_test</a>
            </li>
            <li>
                <a href="https://ribalkoko48.github.io/x5_test">x5_test</a>
            </li>
            <li>
                <a href="https://ribalkoko48.github.io/mobx">mobX</a>
            </li>
            <li>
                <a href="https://ribalkoko48.github.io/auth-page/">auth-page</a>
            </li>
        </ul>
    </BrowserRouter>,
    document.getElementById('root')
);
