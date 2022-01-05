import React from 'react';
import preloader from '../../assets/preloader.svg';

import s from './Preloader.module.css';

const Preloader = () => {
    return <div>
        <img src={preloader} alt='preloader' className={s.preloader} />
    </div>
}

export default Preloader;