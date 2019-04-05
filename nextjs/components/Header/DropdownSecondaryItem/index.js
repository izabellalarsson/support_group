import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Link from 'next/link'

const DropdownSecondaryItemStyle = styled.div`
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
const DropdownSecondaryItem = ({text, link, handleClickMenu}) => {
    return (
        <DropdownSecondaryItemStyle>
            <Link href={link}><a href={link} onClick={handleClickMenu}>{text}</a></Link>
        </DropdownSecondaryItemStyle>
    );
};

DropdownSecondaryItem.propTypes = {
    
};

export default DropdownSecondaryItem;