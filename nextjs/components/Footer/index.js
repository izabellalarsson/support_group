import React, { Component } from 'react';
import styled from 'styled-components';
import SmallText from './SmallText';

const FooterStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #151A32;
    height: 650px;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;

`
class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <SmallText>If you have any questions, feel free to contact us</SmallText>
                <SmallText>For donations and supportive acts Click here</SmallText>
                <SmallText>Support Group Network © 2019</SmallText>
            </FooterStyled>
        );
    }
}

export default Footer;