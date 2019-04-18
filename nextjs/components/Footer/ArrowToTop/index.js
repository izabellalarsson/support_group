import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ArrowToTopStyled = styled.div`
  margin-top: 3vh;
  transition: 0.5s ease;
`;

class ArrowToTop extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }
  componentDidMount() {
    this.handleBackToTop();
  }

  handleBackToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <ArrowToTopStyled onClick={this.handleBackToTop}>
        <svg
          width='52'
          height='12'
          viewBox='0 0 52 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M50.8006 10.3989L25.9003 2L1 10.3989'
            stroke='white'
            strokeWidth='3'
            strokeMiterlimit='10'
          />
        </svg>{" "}
      </ArrowToTopStyled>
    );
  }
}

ArrowToTop.propTypes = {};

export default ArrowToTop;
