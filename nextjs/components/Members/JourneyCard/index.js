import React from 'react';
import styled from 'styled-components';
import Text from '../../Text';

const JourneyCardStyled = styled.div`
margin-top: 30px;
img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: 50% 50%;
}
div{
    position: absolute;
    background-color: white;
    margin: 27vh auto 0 auto;
    width: 50%;
    height: 13vh;
    
}
p{
    margin-left: 30px;
    font-size: 12px;
}

`
const JourneyCard = ({name, age, memberSince, src}) => {
    return (
         <JourneyCardStyled>
            <div>            
                <p>{name}</p>
                <p>{`${age} years old`}</p>
                <p>{`Member since ${memberSince}`}</p>  
            </div>
            <img src={src} alt="person" />
        </JourneyCardStyled>
    );
};

export default JourneyCard;