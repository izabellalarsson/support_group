import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import nookies from "nookies";
const HeaderStyled = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

class Header extends Component {
  state = {
    isClicked: false,
    searchOpen: false,
    pageActive: ""
  };

  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx
    });
  }

  componentDidMount() {
    this.setState({
      pageActive: nookies.get(this.state.ctx).pageActive
    });
  }

  handleClickMenu = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  handleClickActive = slug => {
    this.setState({
      isClicked: !this.state.isClicked
    });

    nookies.set(this.state.ctx, "pageActive", slug, {
      maxAge: 60 * 60 * 24,
      path: "/"
    });
  };

  handleClickSearch = () => {
    this.setState({
      searchOpen: !this.state.searchOpen
    });
  };

  render() {
    return (
      <HeaderStyled>
        <Navbar
          handleClickMenu={this.handleClickMenu}
          isClicked={this.state.isClicked}
          handleClickSearch={this.handleClickSearch}
          handleClickActive={this.handleClickActive}
          pageActive={this.state.pageActive}
        />
        <SearchBar searchOpen={this.state.searchOpen} />
      </HeaderStyled>
    );
  }
}

Header.propTypes = {};

export default Header;
