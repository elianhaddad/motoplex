/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Form, useFormik} from 'formik';

import {styled} from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Actions from '../../core/state/MotoPlex/actions';
import {getError, getIsLoading} from '../../core/state/MotoPlex/selectors';

import validationSchema from './validationSchema';

const {submitEmail} = Actions;

const TitleContact = styled(Typography)(() => ({
    fontSize: '1.45rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    paddingLeft: 25,
    letterSpacing: '2px',
    textDecoration: 'none'
}));

const CssTextField = styled(TextField)({
    '& input::placeholder': {color: 'rgba(255, 255, 255, 0.8)'},
    '& label.Mui-focused': {color: 'white'},
    '& .MuiInput-underline:after': {borderBottomColor: 'green'},
    '& .MuiOutlinedInput-root': {
        padding: '10px',
        color: 'rgba(255, 255, 255, 0.8)',
        '& fieldset': {borderColor: 'rgba(255, 255, 255, 0.7)'},
        '&:hover fieldset': {borderColor: 'white'},
        '&.Mui-focused fieldset': {borderColor: 'white'}
    },
    '& .MuiInputLabel-root': {color: 'rgba(255, 255, 255, 0.6)'}
});

const ContactForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    return (
        <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
                name: '',
                surname: '',
                phone: '',
                email: '',
                city: '',
                model: '',
                message: ''
            }}
            onSubmit={values => {
                dispatch(submitEmail(values));
            }}
        >
            {({handleSubmit, handleChange, values, touched, errors}) => (
                <Grid container direction="column" spacing={2}>
                    <Grid item xs={12} textAlign="center" mt={3}>
                        <TitleContact>
                            CONTACTATE CON NOSOTROS
                        </TitleContact>
                    </Grid>
                    <Grid item xs={12} mt={2} width="99%">
                        <Grid container spacing={2} direction="row" px="25%" alignItems="center" justifyContent="center">
                            <Grid item xs={6}>
                                <CssTextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Nombre"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    fullWidth
                                    id="surname"
                                    name="surname"
                                    label="Apellido"
                                    value={values.surname}
                                    onChange={handleChange}
                                    error={touched.surname && Boolean(errors.surname)}
                                    helperText={touched.surname && errors.surname}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    label="Número de teléfono"
                                    value={values.phone}
                                    onChange={handleChange}
                                    error={touched.phone && Boolean(errors.phone)}
                                    helperText={touched.phone && errors.phone}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    fullWidth
                                    id="city"
                                    name="city"
                                    label="Ciudad"
                                    value={values.city}
                                    onChange={handleChange}
                                    error={touched.city && Boolean(errors.city)}
                                    helperText={touched.city && errors.city}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    fullWidth
                                    id="model"
                                    name="model"
                                    label="Modelo"
                                    value={values.model}
                                    onChange={handleChange}
                                    error={touched.model && Boolean(errors.model)}
                                    helperText={touched.model && errors.model}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField
                                    fullWidth
                                    id="message"
                                    name="message"
                                    label="Mensaje"
                                    multiline
                                    rows={7}
                                    value={values.message}
                                    onChange={handleChange}
                                    error={touched.message && Boolean(errors.message)}
                                    helperText={touched.cimessagety && errors.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box textAlign="center">
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                        onClick={handleSubmit}
                                        sx={{
                                            width: '250px', my: 3, textAlign: 'center'
                                        }}
                                    >
                                        ENVIAR
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Formik>
    );
};

export default ContactForm;
