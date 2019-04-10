import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const DateTextStyle = styled.p`
align-self: flex-end;
margin-right: 30px;
color: #343849;
font-size: 12px;
`

const DateText = ({text}) => {
    return (
        <DateTextStyle>
            {text}
        </DateTextStyle>
    );
};

DateText.propTypes = {
    
};

export default DateText;