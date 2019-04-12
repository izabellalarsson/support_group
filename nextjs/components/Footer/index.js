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
    
    div:last-child{
        margin-bottom: 0px;
    }

`
class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <FooterTitle>Contact</FooterTitle>
                <FooterText>+4676-884 08 84 info@supportgroup.se</FooterText>
                <FooterText>Kungsladugårdsvägen 5 <br/>Restad Gård, 462 54<br /> Vänersborg Sweden</FooterText>
                <SmallText>If you have any questions,<br /> feel free to contact us</SmallText>
                <SmallText>
                    For donations and<br/>
                    supportive acts <a href="#" >click here</a>                    
                </SmallText>
                <IconLine />
                <SmallText>Support Group Network © 2019</SmallText>
            </FooterStyled>
        );
    }
}

export default Footer;