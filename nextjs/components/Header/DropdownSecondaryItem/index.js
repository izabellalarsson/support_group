import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import Text from "../../Text";
import Arrow from "../Arrow";
import IconLine from "../../IconLine";

const DropdownSecondaryItemStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
  height: ${props => props.isClicked ? '430px' : '300px'};
  width: 100%;
  a {
    font-size: 22px;
    color: var(--font-grey);
    text-decoration: none;
  }

  hr {
    display: block;
    width: 100vw;
    border-top: 2px solid var(--sub-bg);
  }

  :hover {
    text-decoration: underline;
  }
`;
const DropdownSecondaryItem = ({
  text,
  link,
  handleClickMenu,
  isClicked,
  handleClickSettings,
  handleSwitchLargeLetters,
  isLargeLetters,
  handleSwitchHighContrast,
  isHighContrast
}) => {
  return (
    <DropdownSecondaryItemStyle isClicked={isClicked}>
      <IconLine
        menu='menu'
        isClicked={isClicked}
        handleClickSettings={handleClickSettings}
        handleSwitchLargeLetters={handleSwitchLargeLetters}
        isLargeLetters={isLargeLetters}
        handleSwitchHighContrast={handleSwitchHighContrast}
        isHighContrast={isHighContrast}
      />
      <Link href={link}>
        <a href={link} onClick={handleClickMenu}>
          {text}
        </a>
      </Link>
    </DropdownSecondaryItemStyle>
  );
};

DropdownSecondaryItem.propTypes = {};

export default DropdownSecondaryItem;
