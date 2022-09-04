import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Details from './Details';
import Form from './Form';

const GitHub = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/details" key="Details" component={Details}/>
            <Route path="/" key="Form" component={Form}/>
        </Switch>
    </BrowserRouter>
);

export default GitHub;
