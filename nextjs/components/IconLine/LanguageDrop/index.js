import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLanguageDrop = styled.div`
  /* color: ${props => (props.isLanguageClicked ? "red" : "blue")}; */
  transition: height 0.2s ease;
  height: ${props => (props.isLanguageClicked ? "20vh" : "0")};
  background: white;
  margin-top: -1.5vh;

  display: grid;
  grid-template-columns: auto auto;
  ${props => (props.isLanguageClicked ? "margin: 0 0px 30px 30px" : "")};

  p {
    transition: opacity 0s ease;
    opacity: ${props => (props.isLanguageClicked ? "1" : "0")};
  }
`;

const LanguageDrop = ({ isLanguageClicked, handleLanguageClick }) => {
  return (
    <StyledLanguageDrop isLanguageClicked={isLanguageClicked}>
      <p>English</p>
      <p>Svenska</p>
      <p>English</p>
      <p>English</p>
      <p>English</p>
    </StyledLanguageDrop>
  );
};

LanguageDrop.propTypes = {};

export default LanguageDrop;
