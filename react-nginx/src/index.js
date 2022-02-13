import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GenerateData from "./GenerateData";
import GetAggregationTime from "./GetAggregationTime"


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
        <Switch>
            <Route exact path="/menu" component={Menu} />
        </Switch>
        <Switch>
            <Route exact path="/generateData" component={GenerateData} />
        </Switch>
        <Switch>
            <Route exact path="/getAggregationTime" component={GetAggregationTime} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
