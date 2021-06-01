import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import css from './style.module.scss';
import './global.scss';

ReactDOM.render(
    <BrowserRouter>
        <ul>
            <li className={css.li}>
                <a href="https://ribalkoko48.github.io/angular">Angular</a>
            </li>
            <li className={css.li}>
                <a href="https://ribalkoko48.github.io/profi_test">profi test</a>
            </li>
            <li className={css.li}>
                <a href="https://ribalkoko48.github.io/x5_test">x5 test</a>
            </li>
            <li className={css.li}>
                <a href="https://ribalkoko48.github.io/mobx">mobX</a>
            </li>
            <li className={css.li}>
                <a href="https://ribalkoko48.github.io/auth-page/">auth-page</a>
            </li>
        </ul>
    </BrowserRouter>,
    document.getElementById('root')
);
