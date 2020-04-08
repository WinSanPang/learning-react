import React, { Component } from 'react';

import SushiImage from '../components/SushiImage/SushiImage';

class Sushi extends Component {
    render() {
        return (
            <div>
                <h1>The Sushi Platter</h1>
                <SushiImage/>
            </div>
        );
    }
}

export default SushiImage;