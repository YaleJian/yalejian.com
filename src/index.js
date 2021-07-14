import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {UI, Login} from "yale-ui";
import HomePage from "./pages/HomePage";
import AppDownload from "./pages/modules/AppDownload/AppDownload";
import Photo from "./pages/modules/Photo/Photo";
import EatToday from "./pages/modules/EatToday/EatToday";
import Hf from "./pages/modules/CloudPlayer/CloudPlayer";
import Chat from "./pages/modules/Chat/Chat";
import WeatherApp from "./pages/modules/WeatherApp/WeatherApp";

let root = <>
    <Login/>
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
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
ReactDOM.render(<React.StrictMode>{root}</React.StrictMode>, document.getElementById('root'));

reportWebVitals();