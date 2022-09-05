import Types from './types';

const submitEmail = props => ({
    type: Types.SUBMIT_EMAIL, ...props
});

const setIsLoading = props => ({
    type: Types.SET_IS_LOADING, ...props
});

const setError = props => ({
    type: Types.SET_ERROR, ...props
});

export default {
    submitEmail, setIsLoading, setError
};
