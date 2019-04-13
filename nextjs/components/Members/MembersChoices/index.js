import React from 'react';
import styled from 'styled-components';

const MembersChoicesStyled = styled.button`
    color: var(--font-grey);
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    font-weight: bold;
    height: 20px;
    width: 70px;
    padding: 0;
`

const MembersChoices = ({text, onClick}) => {
    return (
        <MembersChoicesStyled onClick={onClick}>
            {text}
        </MembersChoicesStyled>
    );
};

export default MembersChoices;