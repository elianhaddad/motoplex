import React, {useState} from 'react';
import {useHistory} from 'react-router';

import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

import isEmpty from 'lodash/isEmpty';

const RepositoryForm = ({
    fetchExtensionsRequested,
    isLoading
}) => {
    const [open, setOpen] = useState(null);
    const [owner, setOwner] = useState('argoproj');
    const [repo, setRepo] = useState('argo-site');
    const [message, setMessage] = useState('');

    const history = useHistory();

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const searchExtensions = () => {
        if (isEmpty(owner) || isEmpty(repo)) {
            setMessage(isEmpty(owner) ? 'You must complete Owner field' : 'You must complete Repository field');
            handleClick();
            return;
        }
        fetchExtensionsRequested({
            push: history.push, owner, repo, setMessage, alert: handleClick
        });
    };

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small"/>
        </IconButton>
    );

    return (
        <>
            <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center" className="initial-grid-margin-top">
                <Grid item>
                    <h1>Extension Counter</h1>
                </Grid>
                <Grid item>
                    <TextField label="Owner" value={owner} onChange={e => setOwner(e.target.value)}/>
                </Grid>
                <Grid item>
                    <TextField label="Repository" value={repo} onChange={e => setRepo(e.target.value)}/>
                </Grid>
                <Grid item>
                    <Button onClick={searchExtensions}>
                        Search extensions
                    </Button>
                </Grid>
                {isLoading && (
                    <Grid item>
                        <CircularProgress/>
                    </Grid>
                )}
            </Grid>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top', horizontal: 'center'
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </>
    );
};

RepositoryForm.propTypes = {
    fetchExtensionsRequested: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default RepositoryForm;
