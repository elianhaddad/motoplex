import React from 'react';
import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {Box} from '@mui/system';

import Instagram from '@mui/icons-material/Instagram';
import LocationCityRounded from '@mui/icons-material/LocationOn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';

import ContactForm from '../../components/ContactForm';
import Header from '../../components/Header/Desktop';
import Marcas from '../../components/Marcas/Desktop';

import Banner from '../../images/banner.png';
import FirstBlock from '../../images/cuadros/cuadro-1.png';
import Logo from '../../images/logo.png';
import SecondBlock from '../../images/cuadros/cuadro-2.png';

import Aprilia from '../../images/marcas/aprilia.png';
import Guzzi from '../../images/marcas/guzzi.png';
import Paiggio from '../../images/marcas/paiggio.png';
import PaiggioGroup from '../../images/marcas/paiggioGroup.png';
import Vespa from '../../images/marcas/vespa.png';

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '23px!important',
    fontWeight: 'bold !important',
    color: 'white',
    letterSpacing: '2px'
}));

const Desktop = () => (
    <Grid direction="column" width="100%">
        <Header/>
        <Grid item id="inicio">
            <img
                src={Banner}
                alt="banner"
                style={{
                    width: '100%', height: 'auto'
                }}
            />
            <SubtitleTypography my={4} textAlign="center">
                MÁS QUE UN LUGAR PARA VISITAR, UN
                <br/>
                DESTINO AL QUE LA GENTE QUIERE VOLVER
            </SubtitleTypography>
        </Grid>
        <Grid item id="marcas">
            <Marcas/>
        </Grid>
        <Grid item id="cuadros" display="flex" my={6} px={6} spacing={10} justifyContent="center" alignItems="center">
            <img
                src={FirstBlock}
                alt="cuadro-1"
                style={{
                    width: '40%', alignSelf: 'center'
                }}
            />
            <img
                src={SecondBlock}
                alt="cuadro-2"
                style={{
                    paddingLeft: '10%', width: '40%', alignSelf: 'center'
                }}
            />
        </Grid>
        <Grid item id="nosotros">
            <Grid
                container
                mt={3}
                py={6}
                px={5}
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{backgroundColor: '#1a1a1a'}}
            >
                <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                    <img
                        src={Logo}
                        alt="imgNosotros"
                        style={{
                            width: '50%', height: 'auto', alignSelf: 'center'
                        }}
                    />
                </Grid>
                <Grid item xs={8} pr="10%" fontSize="1.35rem !important">
                    <span style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        letterSpacing: '1px'
                    }}
                    >
                        <b>MOTOPLEX: </b>
                        ES EL LUGAR DONDE TODO ESTO COEXISTE
                        EN UNA EXPERIENCIA QUE NUNCA TERMINA. DESCUBRIR
                        EL CONCEPTO INTERNACIONAL DE TIENDAS DE GRUPO
                        PIAGGIO EN ARGENTINA. VESPA, PIAGGIO, APRILIA Y
                        MOTO GUZZI. EXPLORA TUS MARCAS FAVORITAS Y DALE
                        A TU PASIÓN LA FORMA QUE PREFIERES.
                    </span>
                </Grid>
            </Grid>
        </Grid>
        <Grid item id="contacto">
            <ContactForm/>
            <Grid container mt={2} spacing={4} sx={{backgroundColor: '#1a1a1a'}} justifyContent="center" alignItems="center" height={300}>
                <Grid item xs={4} display="flex" justifyContent="center">
                    <img
                        src={Logo}
                        alt="imgNosotros"
                        style={{
                            width: '35%', height: 'auto', alignSelf: 'center', textAlign: 'center'
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction="row">
                        <Grid item xs={12} my={3} pr={6} display="flex" justifyContent="center" alignItems="center">
                            <img
                                src={PaiggioGroup}
                                alt="PaiggioGroup"
                                style={{
                                    width: '35%', height: 'auto', alignSelf: 'center', margin: 'auto'
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <img
                                src={Paiggio}
                                alt="Paiggio"
                                style={{
                                    width: '80%', height: 'auto', alignSelf: 'center'
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <img
                                src={Vespa}
                                alt="Vespa"
                                style={{
                                    width: '80%', height: 'auto', alignSelf: 'center'
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <img
                                src={Guzzi}
                                alt="Guzzi"
                                style={{
                                    width: '80%', height: 'auto', alignSelf: 'center'
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <img
                                src={Aprilia}
                                alt="Aprilia"
                                style={{
                                    width: '80%', height: 'auto', alignSelf: 'center'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        <Typography fontFamily="Arial" color="white" fontWeight="bold" fontSize={15} textAlign="center">
                            CONTACTO:
                        </Typography>
                        <Typography fontFamily="Arial" color="white" fontSize={13}>
                            <Grid container direction="column" mt={2}>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item mr={1}>
                                        <FacebookOutlined/>
                                    </Grid>
                                    <Grid item>
                                        motoplex.rosario
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item mr={1}>
                                        <Instagram/>
                                    </Grid>
                                    <Grid item>
                                        motoplex.rosario
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item mr={1}>
                                        <WhatsApp/>
                                    </Grid>
                                    <Grid item>
                                        3412129143
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item mr={1}>
                                        <LocationCityRounded/>
                                    </Grid>
                                    <Grid item>
                                        Av. Eva Perón 5616
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default Desktop;
