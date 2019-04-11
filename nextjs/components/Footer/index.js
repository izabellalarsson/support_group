import React, { Component } from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #151A32;
    height: 50px;
    width: 100%;
`
class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <p>hej</p>
            </FooterStyled>
        );
    }
}

export default Footer;