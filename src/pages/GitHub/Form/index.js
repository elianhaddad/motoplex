import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {GitHub} from '../../../core/actions';
import Selectors from '../../../core/selectors';

import Component from './Component';

const {fetchExtensionsRequested} = GitHub;

const mapStateToProps = state => ({isLoading: Selectors.GitHub.getIsLoading(state)});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({fetchExtensionsRequested}, dispatch)
)(Component);
