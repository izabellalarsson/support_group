import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SubheadingStyle = styled.h2`
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 20px;
  color: #343849;
  margin-left: 30px;
`;

const Subheading = ({ text }) => {
  return <SubheadingStyle> {text} </SubheadingStyle>;
};

Subheading.propTypes = {};

export default Subheading;
