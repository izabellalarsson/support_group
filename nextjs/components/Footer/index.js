import React, { Component } from "react";
import styled from "styled-components";
import SmallText from "./SmallText";
import FooterText from "./FooterText";
import FooterTitle from "./FooterTitle";
import IconLine from "../IconLine";
import Link from "next/link";
import ArrowToTop from "./ArrowToTop";

const FooterStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
  background: var(--headline-font);
  transition: height 0.5 ease-in-out;
  height: ${props => (props.isClicked ? "113vh" : "93vh")};
  width: 100%;

  div:last-child {
    margin-bottom: 0px;
  }
`;
class Footer extends Component {
  state = {
    isClicked: false
  };

  handleClickSettings = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });

    console.log("hej");
  };

  render() {
    return (
      <FooterStyled isClicked={this.state.isClicked}>
        <ArrowToTop />

        <FooterTitle>Contact</FooterTitle>
        <FooterText>+4676-884 08 84 info@supportgroup.se</FooterText>
        <FooterText>
          Kungsladugårdsvägen 5 <br />
          Restad Gård, 462 54
          <br /> Vänersborg Sweden
        </FooterText>
        <SmallText>
          If you have any questions,
          <br /> feel free to contact us
        </SmallText>
        <SmallText>
          For donations and <br />
          supportive acts <Link href='/make-a-change'>click here</Link>
        </SmallText>
        <IconLine
          handleClickSettings={this.handleClickSettings}
          isClicked={this.state.isClicked}
        />
        <SmallText>Support Group Network © 2019</SmallText>
      </FooterStyled>
    );
  }
}

export default Footer;
