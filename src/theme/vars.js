/* eslint-disable import/prefer-default-export */
import get from 'lodash/get';

const vars = {
    primary: '#8e1f23',
    secondary: '#6e759f',
    success: '#57ca22',
    warning: '#ffA319',
    error: '#ff1943',
    info: '#33C2ff',
    black: '#223354',
    white: '#fff',
    primaryAlt: '#000c57',
    gray: '#464646'
};

export const getStyledVar = cssVar => {
    const styledJson = JSON.parse(localStorage.getItem('styled'));

    return get(styledJson, cssVar) || get(vars, cssVar);
};
