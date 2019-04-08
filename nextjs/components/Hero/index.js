import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Title from '../Title'

const HeroStyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

div {
    height: 70vh;
    width: 92vw;
    margin-top: -50px;
    padding: 0;
    background: #EFEFEF;
    margin-bottom: 55px;

}

`

const Hero = ({text}) => {
    return (
        <HeroStyle>
            <Title text={text}></Title>
            <div>

            </div>
        </HeroStyle>
    );
};

Hero.propTypes = {
    
};

export default Hero;