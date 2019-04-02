import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'

const DropdownMainItemStyle = styled.div`
    color: #808080;
    text-decoration: none;
    font-size: 20px;
    margin-right: 5%;
    margin-top: 5%;
`
const DropdownMainItem = ({text, link, handleClickMenu}) => {
    return (
        <DropdownMainItemStyle>
            <Link href="/about"><a href="/about">{text}</a></Link>
        </DropdownMainItemStyle>
    );
};

DropdownMainItem.propTypes = {
    
};

export default DropdownMainItem;