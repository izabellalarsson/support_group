import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundStyled = styled.div`
    height: 60vh;
    width: 84%;
    margin-top: -20px;
    padding: 0;
    background: var(--main-bg);
    margin-bottom: 55px;
    align-self: flex-end;

`
const Background = ({children}) => {
    return (
        <BackgroundStyled>
            {children}
        </BackgroundStyled>
    );
};

Background.propTypes = {
    
};

export default Background;