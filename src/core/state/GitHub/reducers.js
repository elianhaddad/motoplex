import {default as Types} from './types';

const {
    FETCH_EXTENSIONS_SUCCEEDED,
    SET_IS_LOADING
} = Types;

const initialState = {
    isLoading: false,
    extensions: []
};

const gitHubReducer = (state = {...initialState}, {type, ...props}) => {
    switch (type) {
        case FETCH_EXTENSIONS_SUCCEEDED: {
            return {
                ...state, extensions: props.extensions
            };
        }
        case SET_IS_LOADING: {
            return {
                ...state, isLoading: props.isLoading
            };
        }
        default:
            return state;
    }
};

export default gitHubReducer;
