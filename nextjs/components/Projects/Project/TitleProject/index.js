import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const TitleProjektStyle = styled.h2`
font-family: 'Rubik', sans-serif;
color: #151A32;
font-size: 28px;
font-weight: bold;
padding-top: ${props => props.padding ? '50px' : '42px'};
margin: 0;
margin-left: 30px;
z-index: 998;
margin-bottom: 40px;
line-height: 100%;



`

const TitleProjekt = ({text, padding}) => {
    return (
        <TitleProjektStyle padding={padding}>
            {text}
        </TitleProjektStyle>
    );
};

TitleProjekt.propTypes = {
    
};

export default TitleProjekt;