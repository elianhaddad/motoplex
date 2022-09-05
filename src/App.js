import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import './fonts/FSEmeric/stylesheet.css';
import ThemeProvider from './theme/ThemeProvider';
import {LightTheme} from './theme/theme';

import Motoplex from './pages';

const App = () => (
    <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
            <Switch>
                <Route path="/" key="Motoplex" component={Motoplex}/>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
