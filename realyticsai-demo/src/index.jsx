import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import SideMenu from './component/navigation/SideMenu';
import TopMenu from './component/navigation/TopMenu';
import Offices from './page/Offices';
import Home from './page/Home';
import Transaction from "./page/Transaction";
import './theme/erste/style.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';


ReactDOM.render(
    <BrowserRouter>
        <div className="tesla max-height">
            <TopMenu></TopMenu>
            <SideMenu></SideMenu>
            <div className="tesla-wrapper max-height">
                <Route path="/" exact component={Home}></Route>
                <Route path="/offices" component={Offices}></Route>
                <Route path="/transaction" component={Transaction}></Route>
            </div>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();