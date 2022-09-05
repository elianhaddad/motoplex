/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';

import Aprilia from '../../images/marcas/aprilia.png';
import Guzzi from '../../images/marcas/guzzi.png';
import Paiggio from '../../images/marcas/paiggio.png';
import Vespa from '../../images/marcas/vespa.png';

const MarcasDesktop = () => (
    <Grid container height="400px">
        <Grid item xs={3} sx={{backgroundColor: '#1875cf'}} display="flex" justifyContent="center">
            <img
                src={Paiggio}
                alt="paiggio"
                style={{
                    width: '80%', alignSelf: 'center'
                }}
            />
        </Grid>
        <Grid item xs={3} sx={{backgroundColor: '#4fd6b2'}} display="flex" justifyContent="center">
            <img
                src={Vespa}
                alt="vespa"
                style={{
                    width: '80%', alignSelf: 'center'
                }}
            />
        </Grid>
        <Grid item xs={3} sx={{backgroundColor: 'black'}} display="flex" justifyContent="center">
            <img
                src={Guzzi}
                alt="guzzi"
                style={{
                    width: '80%', alignSelf: 'center'
                }}
            />
        </Grid>
        <Grid item xs={3} sx={{backgroundColor: '#ff0000'}} display="flex" justifyContent="center">
            <img
                src={Aprilia}
                alt="aprilia"
                style={{
                    width: '70%', alignSelf: 'center'
                }}
            />
        </Grid>
    </Grid>
);

export default MarcasDesktop;
