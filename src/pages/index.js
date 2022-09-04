import React from 'react';
import {isMobile} from 'react-device-detect';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Motoplex = () => (
    isMobile ? <Mobile/> : <Desktop/>
);

export default Motoplex;
