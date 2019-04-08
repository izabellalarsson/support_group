import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const TitleStyle = styled.h1`
font-family: 'Rubik', sans-serif;
color: #151A32;
font-size: 40px;
font-weight: bold;
margin-top: 60px;
padding-left: 30px;
z-index: 998;
`

const Title = ({text}) => {
    return (
        <TitleStyle>
            {text}
        </TitleStyle>
    );
};

Title.propTypes = {
    
};

export default Title;