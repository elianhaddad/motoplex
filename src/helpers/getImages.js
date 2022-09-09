/* eslint-disable no-empty */
import Aprilia1 from '../images/gallery/aprilia/APRILIA_01.jpg';
import Aprilia2 from '../images/gallery/aprilia/APRILIA_02.jpg';
import Aprilia3 from '../images/gallery/aprilia/APRILIA_03.jpg';
import Aprilia4 from '../images/gallery/aprilia/APRILIA_04.jpg';
import Aprilia5 from '../images/gallery/aprilia/APRILIA_05.jpg';
import Aprilia6 from '../images/gallery/aprilia/APRILIA_06.jpg';
import Guzzi1 from '../images/gallery/guzzi/MOTOGUZZI_01.jpg';
import Guzzi2 from '../images/gallery/guzzi/MOTOGUZZI_02.jpg';
import Guzzi3 from '../images/gallery/guzzi/MOTOGUZZI_03.jpg';
import Vespa1 from '../images/gallery/vespa/VESPA_01.jpg';

const getImages = brand => {
    if (brand === 'aprilia') {
        return [
            Aprilia1, Aprilia2, Aprilia3, Aprilia4, Aprilia5, Aprilia6
        ];
    }

    if (brand === 'guzzi') {
        return [
            Guzzi1, Guzzi2, Guzzi3
        ];
    }

    if (brand === 'piaggio') {
        return [];
    }

    if (brand === 'vespa') {
        return [
            Vespa1
        ];
    }

    return [];
};

export default getImages;
