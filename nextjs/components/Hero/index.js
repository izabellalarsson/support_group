import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../Title";

const HeroStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: var(--main-bg);

  div {
    height: 70vh;
    width: 92vw;
    margin-top: -20px;
    padding: 0;
    background: var(--main-bg);
    margin-bottom: 55px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

const Hero = ({ text }) => {
  return (
    <HeroStyle>
      <Title text={text}> </Title>{" "}
      <div>
        <img src='https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' />
      </div>{" "}
    </HeroStyle>
  );
};

Hero.propTypes = {};

export default Hero;
