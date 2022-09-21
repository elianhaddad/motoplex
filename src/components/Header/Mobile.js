/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Logo from '../../images/logo.webp';

import Menu from '../MenuComponent';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '1.30rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    paddingLeft: 25,
    letterSpacing: '2px',
    textDecoration: 'none'
}));

const HeaderMobile = ({handleClickMenu}) => (
    <Grid container direction="row" py={4} alignItems="center" justifyContent="center">
        <Grid item xs={4} pl={5}>
            <Menu
                _id="menu"
                menuActions={[
                    {
                        label: 'Inicio',
                        onClick: () => handleClickMenu('inicio')
                    },
                    {
                        label: 'Marcas',
                        onClick: () => handleClickMenu('marcas')
                    },
                    {
                        label: 'Nosotros',
                        onClick: () => handleClickMenu('nosotros')
                    },
                    {
                        label: 'Contacto',
                        onClick: () => handleClickMenu('contacto')
                    }
                ]}
            />
        </Grid>
        <Grid item xs={4}>
            <img
                src={Logo}
                alt="logo"
                style={{
                    width: 'auto', height: '85px'
                }}
            />
        </Grid>
        <Grid item xs={4}/>
    </Grid>
);

export default HeaderMobile;
