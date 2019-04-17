import React from "react";
import styled from "styled-components";
const FooterIconStyled = styled.div`
  width: 42px;
  height: 42px;
  border: 2px solid ${props => props.color || "white"};
  border-radius: 50%;
  margin: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color || "white"};
  background-color: ${props =>
    props.color ? "var(--main-bg)" : "var(--headline-font)"};

  i {
    font-size: 20px;
    color: ${props => (props.color ? "var(--sub-bg) !important" : "white")};
  }
`;

const FooterIcon = ({ children, style, handleClickSettings, isClicked }) => {
  return (
    <FooterIconStyled color={style} onClick={handleClickSettings}>
      {children}
    </FooterIconStyled>
  );
};

export default FooterIcon;
