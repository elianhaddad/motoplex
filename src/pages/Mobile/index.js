import React, {useRef, useState} from 'react';
import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {Box} from '@mui/system';

import Instagram from '@mui/icons-material/Instagram';
import LocationCityRounded from '@mui/icons-material/LocationOn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';

import {Carousel} from 'react-responsive-carousel';
import Lightbox from 'react-image-lightbox';

import getImages from '../../helpers/getImages';

import ContactForm from '../../components/ContactForm/Mobile';
import Header from '../../components/Header/Mobile';
import Marcas from '../../components/Marcas/Mobile';

import Banner1 from '../../images/banner-mobile-1.png';
import Banner2 from '../../images/banner-mobile-2.png';
import FirstBlock from '../../images/cuadros/cuadro-1.png';
import Logo from '../../images/logo.png';
import SecondBlock from '../../images/cuadros/cuadro-2.png';

import Aprilia from '../../images/marcas/aprilia.png';
import Guzzi from '../../images/marcas/guzzi.png';
import Paiggio from '../../images/marcas/paiggio.png';
import PaiggioGroup from '../../images/marcas/paiggioGroup.png';
import Vespa from '../../images/marcas/vespa.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-image-lightbox/style.css';

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '1.2rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    letterSpacing: '2px'
}));

const Mobile = () => {
    const [brand, setBrand] = useState(null);
    const images = getImages(brand);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const inicioRef = useRef(null);
    const marcasRef = useRef(null);
    const nosotrosRef = useRef(null);
    const contactoRef = useRef(null);

    const handleClickMenu = section => {
        if (section === 'inicio') {
            inicioRef.current.scrollIntoView();
        }

        if (section === 'marcas') {
            marcasRef.current.scrollIntoView();
        }

        if (section === 'nosotros') {
            nosotrosRef.current.scrollIntoView();
        }

        if (section === 'contacto') {
            contactoRef.current.scrollIntoView();
        }
    };

    return (
        <Grid direction="column" width="100%" id="inicio" ref={inicioRef}>
            <Header handleClickMenu={handleClickMenu}/>
            <Grid item>
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                    <div>
                        <img
                            src={Banner1}
                            alt="banner-1"
                            style={{
                                width: '100%', height: 'auto'
                            }}
                        />
                    </div>
                    <div>
                        <img
                            src={Banner2}
                            alt="banner-2"
                            style={{
                                width: '100%', height: 'auto'
                            }}
                        />
                    </div>
                </Carousel>
                <SubtitleTypography my={4} px={1} textAlign="center">
                    MÁS QUE UN LUGAR PARA VISITAR, UN
                    <br/>
                    DESTINO AL QUE LA GENTE QUIERE VOLVER
                </SubtitleTypography>
            </Grid>
            <Grid item id="marcas" ref={marcasRef}>
                <Marcas setIsOpen={setIsOpen} setBrand={setBrand}/>
            </Grid>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => { setIsOpen(false); setPhotoIndex(0); setBrand(null); }}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
            <Grid item id="cuadros" display="flex" my={6} px={1} spacing={10} justifyContent="center" alignItems="center">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                    <div>
                        <img
                            src={FirstBlock}
                            alt="cuadro-1"
                            style={{
                                width: '100%', alignSelf: 'center'
                            }}
                        />
                    </div>
                    <div>
                        <img
                            src={SecondBlock}
                            alt="cuadro-2"
                            style={{
                                width: '100%', alignSelf: 'center'
                            }}
                        />
                    </div>
                </Carousel>
            </Grid>
            <Grid
                item
                id="nosotros"
                ref={nosotrosRef}
            >
                <Grid
                    container
                    mt={3}
                    py={6}
                    px={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{backgroundColor: '#1a1a1a'}}
                    fontSize="1.15rem !important"
                >
                    <img
                        src={Logo}
                        alt="imgNosotros"
                        style={{
                            width: '50%', height: 'auto', alignSelf: 'center', marginBottom: '1rem'
                        }}
                    />
                    <span style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        textAlign: 'center',
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
            <Grid item id="contacto" ref={contactoRef}>
                <ContactForm/>
                <Grid
                    container
                    direction="column"
                    mt={2}
                    sx={{backgroundColor: '#1a1a1a'}}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} mx={2}>
                        <Grid container direction="row">
                            <Grid item xs={12} my={3} display="flex" justifyContent="center" alignItems="center">
                                <img
                                    src={PaiggioGroup}
                                    alt="PaiggioGroup"
                                    style={{
                                        width: '35%', height: 'auto', alignSelf: 'center', margin: 'auto'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                                <img
                                    src={Paiggio}
                                    alt="Paiggio"
                                    style={{
                                        width: '80%', height: 'auto', alignSelf: 'center'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                                <img
                                    src={Vespa}
                                    alt="Vespa"
                                    style={{
                                        width: '80%', height: 'auto', alignSelf: 'center'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                                <img
                                    src={Guzzi}
                                    alt="Guzzi"
                                    style={{
                                        width: '80%', height: 'auto', alignSelf: 'center'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
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
                    <Grid item mt={2} xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography fontFamily="Arial" color="white" fontWeight="bold" fontSize={15} textAlign="center">
                                CONTACTO:
                            </Typography>
                            <Typography fontFamily="Arial" color="white" fontSize={13}>
                                <Grid container direction="column" mt={1} mb={2}>
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
            <a
                href="https://api.whatsapp.com/send?phone=+5493412129143&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20..."
                className="float"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa fa-whatsapp my-float"/>
            </a>
        </Grid>
    );
};

export default Mobile;
