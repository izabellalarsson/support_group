import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const DropdownSecondaryItemStyle = styled.a`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
margin-left: 10%;
font-size: 18px;
color: #808080;
text-decoration: none;

:hover {
    text-decoration: underline;
}

`
const DropdownSecondaryItem = ({text, link}) => {
    return (
        <DropdownSecondaryItemStyle href={link}>
            {text} 
        </DropdownSecondaryItemStyle>
    );
};

DropdownSecondaryItem.propTypes = {
    
};

export default DropdownSecondaryItem;