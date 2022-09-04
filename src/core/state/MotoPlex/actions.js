import Types from './types';

const fetchExtensionsRequested = props => ({
    type: Types.FETCH_EXTENSIONS_REQUESTED, ...props
});

const fetchExtensionsSucceeded = props => ({
    type: Types.FETCH_EXTENSIONS_SUCCEEDED, ...props
});

const setIsLoading = props => ({
    type: Types.SET_IS_LOADING, ...props
});

export default {
    fetchExtensionsRequested, fetchExtensionsSucceeded, setIsLoading
};
