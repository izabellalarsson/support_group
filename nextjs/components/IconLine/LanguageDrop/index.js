import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLanguageDrop = styled.div`
  /* color: ${props => (props.isLanguageClicked ? "red" : "blue")}; */
  transition: height 0.2s ease;
  height: ${props => (props.isLanguageClicked ? "20vh" : "0")};
  background: white;
  /* margin-top: -1.5vh; */

  display: grid;
  grid-template-columns: auto auto;
  ${props => (props.isLanguageClicked ? "margin: -10px 0px 30px 30px" : "")};

  .language {
    font-size: 15px;
    transition: opacity 0s ease;
    opacity: ${props => (props.isLanguageClicked ? "1" : "0")};
  }
`;

const LanguageDrop = ({ isLanguageClicked, handleLanguageClick }) => {
  return (
    <StyledLanguageDrop isLanguageClicked={isLanguageClicked}>
      <p className='language'>English</p>
      <p className='language'>Svenska</p>
      <p className='language'>Arabic</p>
      <p className='language'>Espanol</p>
      <p className='language'>Deutsch</p>
    </StyledLanguageDrop>
  );
};

LanguageDrop.propTypes = {};

export default LanguageDrop;
