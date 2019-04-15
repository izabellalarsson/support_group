import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../Title'
import Background from '../Background';


const AwardStyled = styled.div`
    display: flex;
    flex-direction: column;

img {
    width: 100%;
}

div:nth-child(2) div{
    position: absolute;
    left: 0;
    display: grid;
    grid-template-columns: 48% 48%;
    grid-column-gap: 3%;
    grid-row-gap: 15%;
    margin: 13vh 30px;
}




`
const Awards = ({text}) => {
    return (
        <AwardStyled>
            <Title text={text}></Title>
            <Background>
                <div>
                    <img src="https://dummyimage.com/2000x1720/ff123f/123312"/>
                    <img src="https://dummyimage.com/2000x1720/ff123f/123312"/>
                    <img src="https://dummyimage.com/2000x1720/ff123f/123312"/>
                    <img src="https://dummyimage.com/2000x1720/ff123f/123312"/>
                </div>
            </Background>

        </AwardStyled>
    );
};

Awards.propTypes = {
    
};

export default Awards;