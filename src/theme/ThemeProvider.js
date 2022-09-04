import React, {useState, createContext, useCallback} from 'react';
import {ThemeProvider} from '@mui/material';
import {StylesProvider} from '@mui/styles';

import get from 'lodash/get';

import {themeCreator} from './base';

export const ThemeContext = createContext();

const ThemeProviderWrapper = props => {
    const curThemeName = localStorage.getItem('appTheme') || 'LightTheme';
    const [themeName, _setThemeName] = useState(curThemeName);
    const theme = themeCreator(themeName);
    const setThemeName = useCallback(themeName => {
        localStorage.setItem('appTheme', themeName);
        _setThemeName(themeName);
    }, []);

    return (
        <StylesProvider injectFirst>
            <ThemeContext.Provider value={setThemeName}>
                <ThemeProvider theme={theme}>{get(props, 'children', null)}</ThemeProvider>
            </ThemeContext.Provider>
        </StylesProvider>
    );
};

export default ThemeProviderWrapper;
