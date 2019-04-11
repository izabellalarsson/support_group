import React, { Component } from 'react';
import styled from 'styled-components';
import SmallText from './SmallText';
import FooterText from './FooterText';
import FooterTitle from './FooterTitle';
import IconLine from './IconLine';

const FooterStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: var(--headline-font);
    height: 650px;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;  

`
class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <FooterTitle>Contact</FooterTitle>
                <FooterText>+4676-884 08 84 info@supportgroup.se</FooterText>
                <FooterText>Kungsladugårdsvägen 5 Restad Gård, 462 54 Vänersborg Sweden</FooterText>
                <SmallText>If you have any questions, feel free to contact us</SmallText>
                <SmallText>For donations and supportive acts Click here</SmallText>
                <IconLine />
                <SmallText>Support Group Network © 2019</SmallText>
            </FooterStyled>
        );
    }
}

export default Footer;