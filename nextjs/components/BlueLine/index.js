import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const BlueLineStyle = styled.hr`
    border: 1px solid var(--blue-line);
    width: 92%;
    margin-right: 0;
    margin-bottom: 0;
    margin-top: 0;

`
const BlueLine = ({props}) => {
    return (
        <BlueLineStyle>
            
        </BlueLineStyle>
    );
};

BlueLine.propTypes = {
    
};

export default BlueLine;