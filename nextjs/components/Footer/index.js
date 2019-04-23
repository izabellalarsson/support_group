import React, { Component } from "react";
import styled from "styled-components";
import SmallText from "./SmallText";
import FooterText from "./FooterText";
import FooterTitle from "./FooterTitle";
import IconLine from "../IconLine";
import Link from "next/link";
import ArrowToTop from "./ArrowToTop";
import nookies from "nookies";

const FooterStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
  background: var(--headline-font);
  transition: height 0.5 ease-in-out;
  height: ${props => (props.isClicked ? "133vh" : "93vh")};
  width: 100%;

  div:last-child {
    margin-bottom: 0px;
  }
`;
class Footer extends Component {
  state = {
    isClicked: false,
    isHighContrast: null,
    isLargeLetters: false,
    isLanguageClicked: false
  };
  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx
    });
  }

  componentDidMount() {
    this.setState({
      isHighContrast:
        nookies.get(this.state.ctx).contrast === "true" ? true : false
      // isLargeLetters: !this.state.isLargeLetters
      // nookies.get(this.state.ctx).letters === "true" ? true : false
    });
  }

  handleLargeLetters = () => {
    this.setState({
      isLargeLetters: !this.state.isLargeLetters
    });
  };

  handleLanguageClick = () => {
    this.setState({
      isLanguageClicked: !this.state.isLanguageClicked
    });
  };

  handleClickSettings = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  handleSwitchHighContrast = () => {
    this.setState({
      isHighContrast: !this.state.isHighContrast
    });
    nookies.set(this.state.ctx, "contrast", !this.state.isHighContrast, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });
    //document.location.reload();
  };
  handleSwitchLargeLetters = () => {
    this.setState({
      isLargeLetters: !this.state.isLargeLetters
    });
    nookies.set(this.state.ctx, "letters", !this.state.isLargeLetters, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });
  };

  render() {
    const style = {
      height: "160vh"
    };
    return (
      <FooterStyled
        isClicked={this.state.isClicked}
        style={this.state.isLanguageClicked ? style : null}
      >
        <ArrowToTop />
        <FooterTitle> Contact </FooterTitle>
        <FooterText> +4676 - 884 08 84 info @supportgroup.se </FooterText>
        <FooterText>
          Kungsladugårdsvägen 5 <br />
          Restad Gård, 462 54 <br /> Vänersborg Sweden
        </FooterText>
        <SmallText>
          If you have any questions, <br /> feel free to contact us
        </SmallText>
        <SmallText>
          For donations and <br />
          supportive acts
          <Link href='/make-a-change'>
            <a href='/make-a-change'> click here </a>
          </Link>
        </SmallText>
        <IconLine
          handleClickSettings={this.handleClickSettings}
          isClicked={this.state.isClicked}
          handleSwitchLargeLetters={this.handleSwitchLargeLetters}
          handleLargeLetters={this.handleLargeLetters}
          isLargeLetters={this.state.isLargeLetters}
          handleSwitchHighContrast={this.handleSwitchHighContrast}
          isHighContrast={this.state.isHighContrast}
          handleLanguageClick={this.handleLanguageClick}
          isLanguageClicked={this.state.isLanguageClicked}
        />
        <SmallText> Support Group Network© 2019 </SmallText>
      </FooterStyled>
    );
  }
}

export default Footer;
