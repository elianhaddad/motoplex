import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Selectors from '../../../core/selectors';

import Component from './Component';

const mapStateToProps = state => ({extensions: Selectors.GitHub.getExtensions(state)});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({}, dispatch)
)(Component);
