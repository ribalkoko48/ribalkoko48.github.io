import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import css from './style.module.scss';
import './global.scss';

ReactDOM.render(
    <BrowserRouter>
        <div className={css.wrapper}>
            <a className={css.li} href="https://ribalkoko48.github.io/auth-page">
                Auth-page
            </a>
            <a className={css.li} href="https://ribalkoko48.github.io/app-angular">
                Angular
            </a>
            <a className={css.li} href="https://ribalkoko48.github.io/profi_test">
                Profi test
            </a>
            <a className={css.li} href="https://ribalkoko48.github.io/x5_test">
                X5 test
            </a>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
