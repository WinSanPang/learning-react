import React from 'react';

import classes from './SushiImage.css';
import SushiImage from '../../assets/Sushi.jpg';

const sushiImage = (props) => (
    <div className={classes.SushiImage}>
        <img src={SushiImage} className={classes.SushiImg}/>
    </div>
);

export default sushiImage;