import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 75px;
    height: 28px;
    background-color: var(--detail-red);
    color: white;
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    letter-spacing: -1.6%;
    border-radius: 5px;
    border: none;
    outline:none;
`


const Button = ({text}) => {
    return (
        <ButtonStyled>
            {text}
        </ButtonStyled>
    );
};

export default Button;