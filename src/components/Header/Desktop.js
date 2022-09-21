/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Logo from '../../images/logo.webp';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '1.30rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    paddingLeft: 25,
    letterSpacing: '2px',
    textDecoration: 'none'
}));

const HeaderDesktop = ({handleClickMenu}) => (
    <Grid container direction="row" py={4} pl={10}>
        <Grid item md={3}>
            <img
                src={Logo}
                alt="logo"
                style={{
                    width: 'auto', height: '85px'
                }}
            />
        </Grid>
        <Grid item md={9} pr={20} display="flex" direction="row" alignItems="center" justifyContent="flex-end">
            <TitleNavbar component={Link} to="#inicio" onClick={() => handleClickMenu('inicio')}>
                INICIO
            </TitleNavbar>
            <TitleNavbar component={Link} to="#marcas" onClick={() => handleClickMenu('marcas')}>
                MARCAS
            </TitleNavbar>
            <TitleNavbar component={Link} to="#nosotros" onClick={() => handleClickMenu('nosotros')}>
                NOSOTROS
            </TitleNavbar>
            <TitleNavbar component={Link} to="#contacto" onClick={() => handleClickMenu('contacto')}>
                CONTACTO
            </TitleNavbar>
        </Grid>
    </Grid>
);

export default HeaderDesktop;
