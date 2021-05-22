import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Okrs from 'Pages/Okrs'
import Error404 from 'Pages/404'

import App  from '../App';


export default class RouterComp extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/okrs" />)}/>
                        <Route exact path="/okrs" component={Okrs}/>
                        <Route path="/404" component={Error404} />
                        <Redirect to="/404" />
                    </Switch>
                </ App>
            </Router>
        );
    }
}
