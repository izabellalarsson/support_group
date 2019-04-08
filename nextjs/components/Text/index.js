import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextStyle = styled.p`
font-family: 'Aktiv Grotesk', sans-serif;
font-size: 16px;
color: #343849;
padding: 0 30px;

`

const Text = ({text}) => {
    return (
        <TextStyle>
            {text}
        </TextStyle>
    );
};

Text.propTypes = {
    
};

export default Text;