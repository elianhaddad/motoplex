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

    const [values, setValues] = useState();

    const formik = useFormik({
        initialValues: {},
        validationSchema,
        onSubmit: values => {
            dispatch(submitEmail(values));
        }
    });

    const handleSubmit = (newValues, helpers) => {
        setValues(values);
    };

    return (
        <Formik
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={(values, helpers) => handleSubmit(values, helpers)}
        >
            <Form>
                <Grid container direction="column">
                    <Grid item xs={12} textAlign="center" mt={3}>
                        <TitleContact>
                            CONTACTATE CON NOSOTROS
                        </TitleContact>
                    </Grid>
                    <Grid item xs={12} mt={2} width="99%">
                        <Grid container spacing={2} direction="row" px="10%" alignItems="center" justifyContent="center">
                            <Grid item xs={12}>
                                <CssTextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Nombre"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField
                                    fullWidth
                                    id="surname"
                                    name="surname"
                                    label="Apellido"
                                    value={formik.values.surname}
                                    onChange={formik.handleChange}
                                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                                    helperText={formik.touched.surname && formik.errors.surname}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    label="Número de teléfono"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField
                                    fullWidth
                                    id="city"
                                    name="city"
                                    label="Ciudad"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                    helperText={formik.touched.city && formik.errors.city}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField
                                    fullWidth
                                    id="model"
                                    name="model"
                                    label="Modelo"
                                    value={formik.values.model}
                                    onChange={formik.handleChange}
                                    error={formik.touched.model && Boolean(formik.errors.model)}
                                    helperText={formik.touched.model && formik.errors.model}
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
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.cimessagety && formik.errors.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box textAlign="center">
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                        sx={{
                                            width: '250px', my: 3, textAlign: 'center', alignSelf: 'center', justifyContent: 'center'
                                        }}
                                    >
                                        ENVIAR
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Form>
        </Formik>
    );
};

export default ContactForm;
