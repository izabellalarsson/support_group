import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Link from 'next/link'
import Text from '../../Text';
import Arrow from '../Arrow';

const DropdownSecondaryItemStyle = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-left: 10%;
margin: 24px 0 24px 30px;
a{
    font-size: 22px;
    color: var(--font-grey);
    text-decoration: none;
}

:hover {
    text-decoration: underline;
}

`
const DropdownSecondaryItem = ({text, link, handleClickMenu}) => {
    return (
        <DropdownSecondaryItemStyle>
            <Link href={link}><a href={link} onClick={handleClickMenu}>{text}</a></Link>
            <Arrow />
        </DropdownSecondaryItemStyle>
    );
};

DropdownSecondaryItem.propTypes = {
    
};

export default DropdownSecondaryItem;