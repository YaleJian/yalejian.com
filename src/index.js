import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {UI,Login} from "yale-ui";
import Base from "./pages/common/Base";
import AppDownload from "./pages/AppDownload/AppDownload";
import Photo from "./pages/Photo/Photo";
import EatToday from "./pages/EatToday/EatToday";
import Hf from "./pages/CloudPlayer/CloudPlayer";
import Chat from "./pages/Chat/Chat";
import WeatherApp from "./pages/WeatherApp/WeatherApp";

let root = <>
    <Login/>
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Base}/>
            <Route path={'/appDownload'} component={AppDownload}/>
            <Route path={'/ui'} component={UI}/>
            <Route path={'/eatToday'} component={EatToday}/>
            <Route path={'/photo/:c/:g/'} component={Photo}/>
            <Route path={'/photo'} component={Photo}/>
            <Route path={'/weather'} component={WeatherApp}/>
            <Route path={'/hf/:id/'} component={Hf}/>
            <Route path={'/Chat'} component={Chat}/>
        </Switch>
    </BrowserRouter>
</>;
ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();