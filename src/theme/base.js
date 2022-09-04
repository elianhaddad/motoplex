/* eslint-disable import/prefer-default-export */
import {LightTheme} from './theme';

const themeMap = {LightTheme};

export function themeCreator(theme) {
    return themeMap[theme];
}
