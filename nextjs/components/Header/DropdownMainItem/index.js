import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'

const DropdownMainItemStyle = styled.div`
    
    
    
    margin: 30px 30px 30px 0;
    font-family: 'Rubik', sans-serif;
    
    a {
        text-decoration: none;
        line-height: 90%;
        font-weight: bold;
        color: var(--headline-font);
        font-size: 26px;
    }
   
    
`
const DropdownMainItem = ({text, link, handleClickMenu}) => {
    return (
        <DropdownMainItemStyle>
            <Link href={link}><a href={link} onClick={handleClickMenu}>{text}</a></Link>
        </DropdownMainItemStyle>
    );
};

DropdownMainItem.propTypes = {
    
};

export default DropdownMainItem;