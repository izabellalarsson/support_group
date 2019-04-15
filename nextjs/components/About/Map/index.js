import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MapStyle = styled.div`
margin: 30px 0;

iframe {
    width: 100%;
    height: 50vh;
    border: none;
}

`

const Map = ({props}) => {
    return (
        <MapStyle>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4285482.433018697!2d7.876395162872145!3d58.36775467513717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4645235c1af1610b%3A0xf3ac5c6c848a5141!2sSupport+Group+Network+(SGN)!5e0!3m2!1ssv!2sse!4v1555060910931!5m2!1ssv!2sse" frameBorder="0" allowFullScreen></iframe>
        </MapStyle>
    );
};

Map.propTypes = {
    
};

export default Map;