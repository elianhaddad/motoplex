import React, {useState} from 'react';
import {useHistory} from 'react-router';

import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import filter from 'lodash/filter';
import includes from 'lodash/includes';
import map from 'lodash/map';

const Details = ({extensions}) => {
    const [filterName, setFilterName] = useState(null);
    const history = useHistory();

    return (
        <>
            <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center" className="initial-grid-margin-top">
                <Grid item>
                    <h2>Filters:</h2>
                </Grid>
                <Grid item>
                    <TextField label="Extension name" value={filterName} onChange={e => setFilterName(e.target.value)}/>
                </Grid>
                <Grid item>
                    <Button onClick={() => history.push('/')} >
                        Go Back
                    </Button>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center" className="grid-margin-top">
                {!filterName && map(extensions, ext => (
                    <Grid item>
                        Extension:&nbsp;
                        {ext.name}
                        &nbsp;
                        - Count:&nbsp;
                        {ext.count}
                    </Grid>
                )
                )}
                {filterName && map(filter(extensions, el => includes(el.name, filterName)), ext => (
                    <Grid item>
                        Extension:&nbsp;
                        {ext.name}
                        &nbsp;
                        - Count:&nbsp;
                        {ext.count}
                    </Grid>
                )
                )}
            </Grid>
        </>
    );
};

Details.propTypes = {extensions: PropTypes.arrayOf(PropTypes.shape({}))};

Details.defaultProps = {extensions: []};

export default Details;
