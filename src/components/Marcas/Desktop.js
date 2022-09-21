/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';

import Aprilia from '../../images/marcas/aprilia.webp';
import Guzzi from '../../images/marcas/guzzi.webp';
import Piaggio from '../../images/marcas/paiggio.webp';
import Vespa from '../../images/marcas/vespa.webp';

const MarcasDesktop = ({setIsOpen, setBrand}) => (
    <Grid container height="400px">
        <Grid
            item
            xs={3}
            sx={{
                backgroundColor: '#1875cf', cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('piaggio'); setIsOpen(true); }}
        >
            <img
                src={Piaggio}
                alt="piaggio"
                style={{
                    width: '80%', alignSelf: 'center'
                }}
            />
        </Grid>
        <Grid
            item
            xs={3}
            sx={{
                backgroundColor: '#4fd6b2', cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('vespa'); setIsOpen(true); }}
        >
            <img
                src={Vespa}
                alt="vespa"
                style={{
                    width: '80%', alignSelf: 'center'
                }}
            />
        </Grid>
        <Grid
            item
            xs={3}
            sx={{
                backgroundColor: '#ff0000', cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('aprilia'); setIsOpen(true); }}
        >
            <img
                src={Aprilia}
                alt="aprilia"
                style={{
                    width: '70%', alignSelf: 'center'
                }}
            />
        </Grid>
        <Grid
            item
            xs={3}
            sx={{
                backgroundColor: 'black', cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('guzzi'); setIsOpen(true); }}
        >
            <img
                src={Guzzi}
                alt="guzzi"
                style={{
                    width: '80%', alignSelf: 'center'
                }}
            />
        </Grid>
    </Grid>
);

export default MarcasDesktop;
