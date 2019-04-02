import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownMainItemStyle = styled.a`
    color: #808080;
    text-decoration: none;
    font-size: 20px;
    margin-right: 5%;
    margin-top: 5%;
`
const DropdownMainItem = ({text, link, isClicked}) => {
    return (
        <DropdownMainItemStyle href={link} onClick={!isClicked}>
           {text} 
        </DropdownMainItemStyle>
    );
};

DropdownMainItem.propTypes = {
    
};

export default DropdownMainItem;