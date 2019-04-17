import React from "react";
import styled from "styled-components";
import FooterIcon from "../Footer/FooterIcon";
import Text from "../Text";
import Settings from "./Settings";

const IconLineStyled = styled.div`
  width: 100%;
  margin-top: ${props => (props.menu ? "50px" : "24px")};
  margin-bottom: 60px;

  .icon-container {
    position: absolute;
    display: flex;
    transform: translateY(-32px);
    width: 100%;
    justify-content: center;
  }
  hr {
    border-top: 1px solid ${props => (props.menu ? "var(--sub-bg)" : "white")};
  }
`;
const IconLine = ({ isClicked, handleClickSettings, menu }) => {
  return (
    <IconLineStyled menu={menu} isClicked={isClicked}>
      <hr />
      <div className='icon-container'>
        <FooterIcon
          style={menu == "menu" ? "var(--sub-bg)" : null}
          handleClickSettings={handleClickSettings}
          isClicked={isClicked} 
          icon="settings"/>
          
        <FooterIcon style={menu == "menu" ? "var(--sub-bg)" : null}
          icon="facebook"/>
          
        <FooterIcon style={menu == "menu" ? "var(--sub-bg)" : null}
          icon="youtube" />
        
      </div>
      <Settings isClicked={isClicked} menu={menu} />
    </IconLineStyled>
  );
};

export default IconLine;
