import React from 'react';
import styled from 'styled-components';

const InputFieldStyled = styled.input`
    border: none;
    box-shadow: inset 1px 1px 3px var(--sub-bg);
    border-radius: 6px;
    margin-bottom: 30px;
    height: 34px;
    width: 100%;
    outline: none;
    color: var(--sub-bg);
    font-size: 14px;

    &::placeholder{
        padding: 10px;
        color: var(--sub-bg);
        font-size: 14px;
    }
`
const InputField = ({placeholder, name, type}) => {
    return (
        <InputFieldStyled placeholder={placeholder} name={name} type={type}>
            
        </InputFieldStyled>
    );
};

export default InputField;