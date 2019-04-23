import React from "react";
import styled from "styled-components";
import Text from "../../Text";
import Link from "next/link";
import FlipSwitch from "../FlipSwitch";
import LanguageDrop from "../LanguageDrop";

const SettingStyled = styled.div`
  transition: height 0.5s ease;
  height: ${props => (props.isClicked ? "50vh" : "0")};
  background: white;
  margin-top: -1.5vh;
  ${props =>
    props.isClicked && props.menu == "menu"
      ? `
    border-top: 2px solid var(--sub-bg);
    border-bottom: 2px solid var(--sub-bg);`
      : ""}

  div:nth-child(1) {
    transition: transform 0.4s ease;
    transform: ${props =>
      props.isClicked ? "scale(1); opacity: 1" : "scale(0)"};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    text-align: center;
    transition: 5s ease;
    margin-top: 6vh;
    font-family: "Rubik", sans-serif;
    text-decoration: none;
    line-height: 90%;
    font-weight: bold;
    color: var(--headline-font);
    font-size: 26px;
  }

  div p {
    align-self: flex-start;
    font-size: 20px;
    padding-bottom: 0;
  }

  div a {
    align-self: flex-start;
    color: var(--detail-red);
    font-size: 20px;
    text-decoration: none;
    margin: 15px 0 0 30px;
  }
`;

const FlipSwitchContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
`;

const TextSizeContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      padding: 0 5px;
      margin: 0;
      align-self: center;
      /* text-decoration: ${props => props.isLargeLetters}; */
    }

    p:nth-child(1) {

      text-decoration: ${props =>
        props.isLargeLetters ? "underline" : "none"};
      text-decoration-color: var(--detail-red)
    }

    p:nth-child(2) {
      font-size: 22px;
    }

    p:nth-child(3) {
      font-size: 24px;
    }
  }
`;

const Settings = ({
  isClicked,
  menu,
  isLargeLetters,
  handleSwitchLargeLetters,
  isHighContrast,
  handleSwitchHighContrast,
  handleLargeLetters,
  handleLanguageClick,
  isLanguageClicked
}) => {
  const style = {
    height: "80vh"
  };
  return (
    <SettingStyled
      isClicked={isClicked}
      menu={menu}
      isLanguageClicked={isLanguageClicked}
      style={isLanguageClicked ? style : null}
    >
      <div>
        <h2> Settings </h2>
        <Text text='Language' onClick={handleLanguageClick} />
        <LanguageDrop isLanguageClicked={isLanguageClicked} />
        <FlipSwitchContainerStyled>
          <Text text='High contrast mode' />
          <FlipSwitch
            switchOn={isHighContrast}
            onClick={handleSwitchHighContrast}
          />
        </FlipSwitchContainerStyled>
        <TextSizeContainerStyled isLargeLetters={isLargeLetters}>
          <Text text='Textsize' />
          <div>
            <p onClick={handleLargeLetters} className='one'>
              Aa
            </p>
            <p className='two'>Aa</p>
            <p className='three'>Aa</p>
          </div>
        </TextSizeContainerStyled>
        <Link href='/privacypolicy'>
          <a href='/privacypolicy'> Privacy policy </a>
        </Link>
      </div>
    </SettingStyled>
  );
};

Settings.propTypes = {};

export default Settings;
